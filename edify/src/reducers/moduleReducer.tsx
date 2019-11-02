import { Module } from '../modules/Module';
import TextEditModule from '../modules/TextEditModule/TextEditModule';
import {
  ModuleActions, SET_ACTIVE_MODULE, SET_ACTIVE_MODULE_STATE,
} from '../actions/moduleActionTypes';

export type ActiveModuleState = 'active'|'preview'|null;

export interface ModuleState {
  modules: Array<Module>,
  activeModule: Module|null,
  activeModuleState: ActiveModuleState,
}

const initialState: ModuleState = {
  modules: [
    new TextEditModule(),
  ],
  activeModule: null,
  activeModuleState: null,
};


const moduleReducer = (state = initialState, action: ModuleActions): ModuleState => {
  switch (action.type) {
    case SET_ACTIVE_MODULE:
      return ({
        ...state,
        activeModule: action.payload,
      });
    case SET_ACTIVE_MODULE_STATE:
      return ({
        ...state,
        activeModuleState: action.payload,
      });
    default:
      return state;
  }
};

export default moduleReducer;
