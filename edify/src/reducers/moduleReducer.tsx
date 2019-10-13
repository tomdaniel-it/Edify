import { Module } from '../modules/Module';
import TextEditModule from '../modules/TextEditModule';
import { ACTIVATE_MODULE, ModuleActions, DISABLE_MODULE } from '../actions/moduleActionTypes';

export interface ModuleState {
  modules: Array<Module>,
}

const initialState: ModuleState = {
  modules: [
    new TextEditModule(),
  ],
};


const moduleReducer = (state = initialState, action: ModuleActions): ModuleState => {
  switch (action.type) {
    case ACTIVATE_MODULE:
    case DISABLE_MODULE:
      return ({
        ...state,
        modules: state.modules.map(
          (module) => (module.id !== action.payload.id ? module : action.payload),
        ),
      });
    default:
      return state;
  }
};

export default moduleReducer;
