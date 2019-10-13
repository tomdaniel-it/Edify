import { SET_ORIGINAL_DOM, UPDATE_CURRENT_DOM, SET_ORIGINAL_HTML } from './domActionTypes';

export const setOriginalHtml = (originalHtml: string) => ({
  type: SET_ORIGINAL_HTML,
  payload: originalHtml,
});

export const setOriginalDom = (originalDom: Document) => ({
  type: SET_ORIGINAL_DOM,
  payload: originalDom,
});

export const updateCurrentDom = (currentDom: Document) => ({
  type: UPDATE_CURRENT_DOM,
  payload: currentDom,
});
