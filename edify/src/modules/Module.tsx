export interface Module {
  id: string;
  icon: string;
  name: string;
  description: string;
  state: 'disabled'|'active'|'preview';

  activate: (originalDom: Document, currentDom: Document) => Promise<Document>;
  preview: (originalDom: Document, currentDom: Document) => Promise<Document>;
  disable: (originalDom: Document, currentDom: Document) => Promise<Document>;
  prepareForPublish?: (originalDom: Document, currentDom: Document) => Promise<Document>;
}
