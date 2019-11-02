export interface Module {
  id: string;
  icon: string;
  name: string;
  description: string;

  addModuleToDom: (originalDom: Document, currentDom: Document) => Promise<Document>;
  removeModuleFromDom: (originalDom: Document, currentDom: Document) => Promise<Document>;
}
