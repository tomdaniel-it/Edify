import { Module } from './Module';

export default class TextEditModule implements Module {
  id: string;
  icon: string;
  name: string;
  description: string;

  constructor() {
    this.id = 'text-edit';
    this.icon = '';
    this.name = 'Text edit';
    this.description = 'Edit texts on the page.';
  }

  activate(originalDom: Document, currentDom: Document) {
    const langEl = currentDom.getElementById('langNL');
    if (langEl != null) {
      langEl.innerHTML = 'BE';
    }
    return currentDom;
  }

  disable(originalDom: Document, currentDom: Document) {
    const langEl = currentDom.getElementById('langNL');
    if (langEl != null) {
      langEl.innerHTML = 'NL';
    }
    return currentDom;
  }
}
