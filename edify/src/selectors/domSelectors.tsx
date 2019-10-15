import { ApplicationState } from '../reducers/rootReducer';

export const getOriginalHtml = (state: ApplicationState) => state.dom.originalHtml;

export const getOriginalDom = (state: ApplicationState) =>
  (new DOMParser()).parseFromString(state.dom.originalHtml || '', 'text/html');

export const getCurrentDom = (state: ApplicationState) => state.dom.currentDom;
