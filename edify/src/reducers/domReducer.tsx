import {
  SET_ORIGINAL_DOM, DomActions, UPDATE_CURRENT_DOM, SET_ORIGINAL_HTML,
} from '../actions/domActionTypes';

export interface DomState {
  originalHtml: string|null,
  originalDom: Document|null,
  currentDom: Document|null,
}

const initialState: DomState = {
  originalHtml: null,
  originalDom: null,
  currentDom: null,
};


const domReducer = (state = initialState, action: DomActions): DomState => {
  switch (action.type) {
    case SET_ORIGINAL_HTML:
      return ({
        ...state,
        originalHtml: action.payload,
      });
    case SET_ORIGINAL_DOM:
      return ({
        ...state,
        originalDom: action.payload,
      });
    case UPDATE_CURRENT_DOM:
      return ({
        ...state,
        currentDom: action.payload,
      });
    default:
      return state;
  }
};

export default domReducer;
