import { handleWarning, handleError } from '../util';

const NODE_TEXT_NAME = '#test';
const SELF_CLOSING_ELEMENTS = [
  'area', 'base', 'br', 'embed', 'hr', 'iframe', 'img', 'input', 'link', 'meta',
  'param', 'source', 'track', 'col', 'command', 'keygen', 'menuitem',
];

export const getDOMFromString =
  (domAsString: string) => (new DOMParser()).parseFromString(domAsString, 'text/html');

const getElementEdifyId = (element: HTMLElement) => element.dataset.eid;

export const escapeHtml = (html: string) => html
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export const injectJavascriptIntoDocument
  = async (doc: Document, src: string, generatedScriptId?: string | null) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `edify/js-injections/${src.charAt(0) !== '/' ? src : src.substring(1)}`;
      if (generatedScriptId != null) {
        script.id = generatedScriptId;
      }
      script.async = false;
      script.addEventListener('load', resolve);
      script.addEventListener('error', () => reject(
        new Error(`Could not inject javascript file into document: script load error. src: ${src}`),
      ));
      doc.head.appendChild(script);
    });

export const getElementByEID: (dom: HTMLElement, eid: string) => null | HTMLElement
  = (dom: HTMLElement, eid: string) => {
    if (getElementEdifyId(dom) === eid) return dom;
    for (let i = 0; i < dom.childNodes.length; ++i) {
      const child = dom.childNodes[i];
      if (child instanceof HTMLElement) {
        const el = getElementByEID(child, eid);
        if (el != null) return el;
      }
    }
    return null;
  };

/**
 * Marks an element as edited. This is necessary for the publish to recognize
 * changed content (and some other things).
 * This will also recognise all children as edited.
 */
export const markElementAsEdited: (element: HTMLElement) => void = (element: HTMLElement) => {
  element.dataset.edifyEdited = '';
};

// TODO: Add support for styling of editor elements (possibly not related to this function)
// TODO: When preview, reload iframe (with new content), otherwise
//       event listeners won't be added to new elements

const isElementEdited: (element: HTMLElement) => boolean
  = (element: HTMLElement) =>
    element.dataset.edifyEdited != null
    || (element.parentNode instanceof HTMLElement && isElementEdited(element.parentNode));

// data-edify-ignore can be added by users to make elements be ignored by the cms
export const shouldIgnoreElement: (element: HTMLElement, originalDOM: HTMLElement) => boolean
  = (element: HTMLElement, originalDOM: HTMLElement) => {
    // If element has been edited by a module, no eid will be present,
    // yet it should not be ignored.
    if (isElementEdited(element)) {
      return false;
    }

    // See if edifyIgnore data is set or if there is no eid
    const { eid, edifyIgnore } = element.dataset;
    if (edifyIgnore != null || eid == null) {
      return true;
    }

    // See if text children are different
    const originalElement = getElementByEID(originalDOM, eid);
    if (originalElement == null) {
      return true;
    }
    for (let i = 0; i < element.childNodes.length; ++i) {
      const child = element.childNodes[i];
      const originalChild = originalElement.childNodes[i];

      if (originalChild == null && child.nodeName === NODE_TEXT_NAME) {
        return true;
      }
      if (originalChild != null) {
        const childIsText = child.nodeName === NODE_TEXT_NAME;
        const origChildIsText = originalChild.nodeName === NODE_TEXT_NAME;

        if (
          ((childIsText && !origChildIsText) || (!childIsText && origChildIsText))
          && (!(child instanceof HTMLElement) || !isElementEdited(child))) {
          return true;
        }
        if (childIsText && origChildIsText && child.nodeValue !== originalChild.nodeValue) {
          return true;
        }
      }
    }

    const { parentNode } = element;
    if (parentNode != null && parentNode instanceof HTMLElement) {
      return shouldIgnoreElement(parentNode, originalDOM);
    }
    return false;
  };

const getElementContentIndexesByEdifyId = (html: string, id: string) => {
  const BUFFER_SIZE = 30;
  let buffer = '';
  const BUFFER_STATES = {
    HTML: 'NORMAL',
    JAVASCRIPT: 'JAVASCRIPT',
    CSS: 'CSS',
    COMMENT: 'COMMENT',
  };
  let bufferState = BUFFER_STATES.HTML;

  // Move buffer as window over html until data-eid is found
  let bufferIndex = 0;
  const bufferRegexes = {
    scriptOpenTag: /^<script[\s>]/i,
    scriptCloseTag: /^<\/script[\s>]/i,
    styleOpenTag: /^<style[\s>]/i,
    styleCloseTag: /^<\/style[\s>]/i,
    commentOpenTag: /^<!--/i,
    commentCloseTag: /^-->/i,
    dataEid: new RegExp(`^data-eid\\s*=\\s*("${id}")|('${id}')`, 'i'),
  };
  let found = false;
  for (let len = html.length; bufferIndex < len; ++bufferIndex) {
    if (buffer.length === BUFFER_SIZE) {
      buffer = buffer.substring(1);
    }
    buffer += html[bufferIndex];

    if (bufferState === BUFFER_STATES.HTML) {
      // The buffer holds normal html
      if (buffer.match(bufferRegexes.scriptOpenTag)) {
        // Buffer going into <script> tag
        bufferState = BUFFER_STATES.JAVASCRIPT;
      } else if (buffer.match(bufferRegexes.styleOpenTag)) {
        // Buffer going into <style> tag
        bufferState = BUFFER_STATES.CSS;
      } else if (buffer.match(bufferRegexes.commentOpenTag)) {
        // Buffer going into <!-- comment
        bufferState = BUFFER_STATES.COMMENT;
      } else if (buffer.match(bufferRegexes.dataEid)) {
        // data-eid id has been found
        found = true;
        break;
      }
    } else if (
      (buffer.match(bufferRegexes.scriptCloseTag) && bufferState === BUFFER_STATES.JAVASCRIPT) ||
      (buffer.match(bufferRegexes.styleCloseTag) && bufferState === BUFFER_STATES.CSS) ||
      (buffer.match(bufferRegexes.commentCloseTag) && bufferState === BUFFER_STATES.COMMENT)
    ) {
      // The buffer holds code that is inside a script, style or comment
      bufferState = BUFFER_STATES.HTML;
    }
  }
  if (!found) {
    handleWarning(new Error(
      `getElementContentIndexesByEdifyId could not find element based on id ${id} in html:`,
    ), { html });
    return null;
  }

  // Find element name of buffer content and identify if self closing tag
  bufferIndex -= buffer.length - 1;
  let quoteChar = null;
  let char = null;
  while (char !== '<' || quoteChar !== null) {
    --bufferIndex;
    if (bufferIndex < 0) {
      handleError(new Error(
        `Element is found by id ${id} but element name could not be found, html: `,
      ), { html });
      return null;
    }
    char = html[bufferIndex];
    buffer = char + buffer;
    if (char === '\'' || char === '"') {
      if (quoteChar === null) {
        // Attribute content starting, content should be ignored
        quoteChar = char;
      } else if (quoteChar === char) {
        // Attribute content ending, content should be read again
        quoteChar = null;
      }
      continue;
    } else if (quoteChar !== null) {
      // Inside attribute content, ignoring character search for <
      continue;
    }
  }
  // Buffer now contains: <elname attr="..." data-eid="x" ...
  const elnameRegexResult = (new RegExp('^<([a-zA-Z]+)\\s(.|\\n)*$')).exec(buffer);
  if (elnameRegexResult === null) {
    handleError(
      new Error(
        'ElementContentIndexes could not be found: \'<\' was found but' +
        ' element name could not be found for buffer:',
      ),
      buffer,
    );
    return null;
  }
  const elname = elnameRegexResult[1];
  if (SELF_CLOSING_ELEMENTS.includes(elname)) {
    // Self closing tags can't be edited, the parent needs to be marked as
    // edited with the self closing tag as content
    handleWarning(new Error(
      'A self closing element was marked as edited, this is forbidden.' +
      ' Instead mark the parent element as edited.',
    ));
    return null;
  }

  // Find start index of content
  char = null;
  quoteChar = null;
  let charIndex = bufferIndex;
  while (char !== '>' || quoteChar !== null) {
    ++charIndex;
    if (bufferIndex > html.length - 1) {
      handleError(new Error(
        `Element with id ${id} found, but closing char '>' of opening tag was not found, html: `,
      ), { html });
      return null;
    }
    char = html[charIndex];
    if (char === '\'' || char === '"') {
      if (quoteChar === null) {
        // Attribute content starting, content should be ignored
        quoteChar = char;
      } else if (quoteChar === char) {
        // Attribute content ending, content should be read again
        quoteChar = null;
      }
      continue;
    } else if (quoteChar !== null) {
      // Inside attribute content, ignoring character search for <
      continue;
    }
  }
  const startIndex = ++charIndex;

  // Find end index of content
  buffer = '';
  bufferIndex = startIndex - 1;
  let childElementsWithSameNameCount = 0;
  const elementOpenTagRegex = new RegExp(`^<${elname}[\\s>](.|\n)*`);
  const elementCloseTagRegex = new RegExp(`^</${elname}[\\s>](.|\n)*`);
  while (!buffer.match(elementCloseTagRegex) || childElementsWithSameNameCount >= 0) {
    ++bufferIndex;
    if (bufferIndex > html.length - 1) {
      handleError(new Error(
        `Element with id ${id} found, but closing tag not found, html: `,
      ), { html });
      return null;
    }
    if (buffer.length === 30) {
      buffer = buffer.substring(1);
    }
    buffer += html[bufferIndex];
    if (buffer.match(elementOpenTagRegex)) {
      ++childElementsWithSameNameCount;
    } else if (buffer.match(elementCloseTagRegex)) {
      --childElementsWithSameNameCount;
    }
  }
  const endIndex = bufferIndex - buffer.length + 1;

  return { start: startIndex, end: endIndex };
};

const replaceHtmlContentById = (html: string, newContent: string, id: string) => {
  const contentIndexes = getElementContentIndexesByEdifyId(html, id);
  if (contentIndexes == null) {
    return html;
  }
  const newHtml = html.substring(0, contentIndexes.start)
    + newContent
    + html.substring(contentIndexes.end);

  return newHtml;
};

export const getPublishableHtml = (originalHtml: string, currentDom: Document) => {
  let updatedHtml = originalHtml;

  const replaceChildrenIfTagged = (element: HTMLElement | Document) => {
    element.childNodes.forEach((el) => {
      if (!(el instanceof HTMLElement)) {
        return;
      }
      const edifyId = getElementEdifyId(el);
      if (isElementEdited(el) && edifyId != null) {
        updatedHtml = replaceHtmlContentById(updatedHtml, el.innerHTML, edifyId);
      } else {
        replaceChildrenIfTagged(el);
      }
    });
  };

  replaceChildrenIfTagged(currentDom);
};
