export interface Module {
  id: string;
  icon: string;
  name: string;
  description: string;

  activate: (originalDom: Document, currentDom: Document) => Document;
  preview: (originalDom: Document, currentDom: Document) => Document;
  disable: (originalDom: Document, currentDom: Document) => Document;
}
