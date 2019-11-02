import {
  getElementEdifyId,
  isElementEdited,
  shouldIgnoreElementWhenEditing,
} from './html';

const createDivElement = (innerHTML: string|null, rootElementAttributes: { [key: string]: string; } = {}) => {
  const div = document.createElement('div');
  Object.keys(rootElementAttributes).forEach(key => {
    div.setAttribute(key, rootElementAttributes[key]);
  });
  div.innerHTML = innerHTML || '';
  return div;
}

const getElementChild = (element: HTMLElement, index: number) =>
  <HTMLElement><any>element.children[index];

const cloneElement = (element: HTMLElement) => <HTMLElement><any>element.cloneNode(true);

describe('getElementEdifyId', () => {
  test('should return edify id of element', () => {
    const el = createDivElement(null, { 'data-eid': '45' });
    expect(getElementEdifyId(el)).toBe('45');
  });

  test('should return null for element without an id', () => {
    const el = createDivElement(null);
    expect(getElementEdifyId(el)).toBeNull();
  }); 
});

describe('isElementEdited', () => {
  test('should return true if element contains data-edify-edited attribute', () => {
    const el = createDivElement(null, { 'data-edify-edited': '' });
    expect(isElementEdited(el)).toBeTruthy();
  });

  test('should return true if parent element contains data-edify-edited attribute', () => {
    const parentEl = createDivElement('<p></p>', { 'data-edify-edited': '' });
    const el:HTMLElement = <any>parentEl.children[0];
    expect(isElementEdited(el)).toBeTruthy();
  });

  test('should return false if neither element nor parent element contains data-edify-edited attribute', () => {
    const parentEl = createDivElement('<p></p>');
    const el = getElementChild(parentEl, 0);
    expect(isElementEdited(el)).toBeFalsy();
  });
});

describe('shouldIgnoreElementWhenEditing', () => {
  test('should return true if element has data-edify-ignore attribute', () => {
    const originalDom = createDivElement(`
      <div data-eid="2" data-edify-ignore></div>
    `, { 'data-eid': '1' });

    const el = getElementChild(cloneElement(originalDom), 0);
    expect(shouldIgnoreElementWhenEditing(el, originalDom)).toBeTruthy();
  });

  test('should return true if parent element has data-edify-ignore attribute', () => {
    const originalDom = createDivElement(`
      <div data-eid="2" data-edify-ignore></div>
    `, { 'data-eid': '1', 'data-edify-ignore': '' });

    const el = getElementChild(cloneElement(originalDom), 0);
    expect(shouldIgnoreElementWhenEditing(el, originalDom)).toBeTruthy();
  });

  test('should return true if element was dynamically added', () => {
    const originalDom = createDivElement(null, { 'data-eid': '1' });
    const currentDom = cloneElement(originalDom);
    currentDom.insertAdjacentHTML('afterbegin', '<p></p>');

    const el = getElementChild(currentDom, 0);
    expect(shouldIgnoreElementWhenEditing(el, originalDom)).toBeTruthy();
  });

  test('should return true if text was dynamically added to element as direct child', () => {
    const originalDom1 = createDivElement(null, { 'data-eid': '11' });
    const currentDom1 = cloneElement(originalDom1);
    currentDom1.innerHTML = 'new text';

    expect(shouldIgnoreElementWhenEditing(currentDom1, originalDom1)).toBeTruthy();

    const originalDom2 = createDivElement(
      '<p data-eid="2"></p>',
      { 'data-eid': '1' },
    );
    const currentDom2 = cloneElement(originalDom2);
    currentDom2.innerHTML = `${currentDom2.innerHTML}new text`;

    expect(shouldIgnoreElementWhenEditing(currentDom2, originalDom2)).toBeTruthy();
  });

  test('should return true if direct text child was dynamically changed', () => {
    const originalDom = createDivElement('Some text', { 'data-eid': '1' });
    const currentDom = cloneElement(originalDom);
    currentDom.innerHTML = 'Updated text';

    expect(shouldIgnoreElementWhenEditing(currentDom, originalDom)).toBeTruthy();
  });

  test('should return true if direct text child was dynamically deleted', () => {
    const originalDom = createDivElement('Some text', { 'data-eid': '1' });
    const currentDom = cloneElement(originalDom);
    currentDom.innerHTML = '';
    
    expect(shouldIgnoreElementWhenEditing(currentDom, originalDom)).toBeTruthy();
  });

  test('should return true if element name was changed', () => {
    const originalDom = createDivElement('<p data-eid="2"></p>', { 'data-eid': '1' });
    const currentDom = cloneElement(originalDom);
    currentDom.innerHTML = '<a data-eid="2"></a>';
    const el = getElementChild(currentDom, 0);

    expect(shouldIgnoreElementWhenEditing(el, originalDom)).toBeTruthy();
  });

  test('should return false if element was not changed', () => {
    const originalDom = createDivElement(`
      <p data-eid="2">some text</p>
      some text
    `, { 'data-eid': '1' });
    const currentDom = cloneElement(originalDom);
    getElementChild(currentDom, 0).outerHTML = '<a data-eid="2"></a>';

    expect(shouldIgnoreElementWhenEditing(currentDom, originalDom)).toBeFalsy();
  });
});
