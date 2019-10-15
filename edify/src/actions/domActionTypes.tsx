export const SET_ORIGINAL_HTML: 'SET_ORIGINAL_HTML' = 'SET_ORIGINAL_HTML';
export const UPDATE_CURRENT_DOM: 'UPDATE_CURRENT_DOM' = 'UPDATE_CURRENT_DOM';

export interface SetOriginalHtml {
  type: typeof SET_ORIGINAL_HTML,
  payload: string,
}

export interface UpdateCurrentDom {
  type: typeof UPDATE_CURRENT_DOM,
  payload: Document,
}

export type DomActions = SetOriginalHtml | UpdateCurrentDom;
