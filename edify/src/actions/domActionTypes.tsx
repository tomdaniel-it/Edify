export const SET_ORIGINAL_HTML: 'SET_ORIGINAL_HTML' = 'SET_ORIGINAL_HTML';
export const SET_ORIGINAL_DOM: 'SET_ORIGINAL_DOM' = 'SET_ORIGINAL_DOM';
export const UPDATE_CURRENT_DOM: 'UPDATE_CURRENT_DOM' = 'UPDATE_CURRENT_DOM';

export interface SetOriginalHtml {
  type: typeof SET_ORIGINAL_HTML,
  payload: string,
}

export interface SetOriginalDom {
  type: typeof SET_ORIGINAL_DOM,
  payload: Document,
}

export interface UpdateCurrentDom {
  type: typeof UPDATE_CURRENT_DOM,
  payload: Document,
}

export type DomActions = SetOriginalHtml | SetOriginalDom | UpdateCurrentDom;
