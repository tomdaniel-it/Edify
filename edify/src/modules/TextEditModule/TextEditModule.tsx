import { Module } from '../Module';
import mediumEditorCss from './medium-editor-css';
import { injectJavascriptIntoDocument } from '../../html/html';
import { handleError } from '../../util';

const MEDIUM_EDITOR_STYLE_ID = 'mediumEditorStyle';
const MEDIUM_EDITOR_SCRIPT_ID = 'mediumEditorScript';
const MEDIUM_EDITOR_SCRIPT_ACTIVATE_ID = 'activateMediumEditorScript';
const MEDIUM_EDITOR_SCRIPT_DESTROY_ID = 'destroyMediumEditorScript';

export default class TextEditModule implements Module {
  id: string;
  icon: string;
  name: string;
  description: string;

  constructor() {
    this.id = 'text-edit';
    this.icon = 'text-edit.png';
    this.name = 'Text edit';
    this.description = 'Edit texts on the page.';
  }

  async addModuleToDom(originalDom: Document, currentDom: Document) {
    const { head, body } = currentDom;
    body.classList.add('medium-editor-target');

    head.insertAdjacentHTML('beforeend', `
      <style id="${MEDIUM_EDITOR_STYLE_ID}">${mediumEditorCss}</style>
    `);

    try {
      await injectJavascriptIntoDocument(
        currentDom,
        'medium-editor/medium-editor.js',
        MEDIUM_EDITOR_SCRIPT_ID,
      );
      await injectJavascriptIntoDocument(
        currentDom,
        'medium-editor/medium-editor-activate.js',
        MEDIUM_EDITOR_SCRIPT_ACTIVATE_ID,
      );
    } catch (error) {
      handleError(error);
    }

    return currentDom;
  }

  async removeModuleFromDom(originalDom: Document, currentDom: Document) {
    try {
      await injectJavascriptIntoDocument(
        currentDom,
        'medium-editor/medium-editor-destroy.js',
        MEDIUM_EDITOR_SCRIPT_DESTROY_ID,
      );
    } catch (error) {
      handleError(error);
    }

    const removeEl = (el: HTMLElement | null) => el && el.remove();

    removeEl(document.getElementById(MEDIUM_EDITOR_STYLE_ID));
    removeEl(document.getElementById(MEDIUM_EDITOR_SCRIPT_ID));
    removeEl(document.getElementById(MEDIUM_EDITOR_SCRIPT_ACTIVATE_ID));
    removeEl(document.getElementById(MEDIUM_EDITOR_SCRIPT_DESTROY_ID));

    return currentDom;
  }
}
