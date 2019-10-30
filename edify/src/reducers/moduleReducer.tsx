import { Module } from '../modules/Module';
import TextEditModule from '../modules/TextEditModule/TextEditModule';
import {
  ACTIVATE_MODULE, ModuleActions, DISABLE_MODULE, PREVIEW_MODULE,
} from '../actions/moduleActionTypes';

export interface ModuleState {
  modules: Array<Module>,
  activeModule: Module|null,
}

const initialState: ModuleState = {
  modules: [
    new TextEditModule(),
  ],
  activeModule: null,
};


const moduleReducer = (state = initialState, action: ModuleActions): ModuleState => {
  switch (action.type) {
    case ACTIVATE_MODULE:
      return ({
        ...state,
        modules: state.modules.map(
          (module) => (module.id !== action.payload.id ? module : action.payload),
        ),
        activeModule: action.payload,
      });
    case PREVIEW_MODULE:
      return ({
        ...state,
        modules: state.modules.map(
          (module) => (module.id !== action.payload.id ? module : action.payload),
        ),
        activeModule: action.payload,
      });
    case DISABLE_MODULE:
      return ({
        ...state,
        modules: state.modules.map(
          (module) => (module.id !== action.payload.id ? module : action.payload),
        ),
        activeModule: null,
      });
    default:
      return state;
  }
};

export default moduleReducer;
