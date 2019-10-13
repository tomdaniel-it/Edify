import { ApplicationState } from '../reducers/rootReducer';

export const getOriginalHtml = (state: ApplicationState) => state.dom.originalHtml;

export const getOriginalDom = (state: ApplicationState) => state.dom.originalDom;

export const getCurrentDom = (state: ApplicationState) => state.dom.currentDom;
