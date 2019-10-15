import { combineReducers } from 'redux';
import accountReducer, { AccountState } from './accountReducer';
import installationReducer, { InstallationState } from './installationReducer';
import domReducer, { DomState } from './domReducer';
import moduleReducer, { ModuleState } from './moduleReducer';

export interface ApplicationState {
  account: AccountState,
  installation: InstallationState,
  dom: DomState,
  modules: ModuleState,
}

const rootReducer = combineReducers({
  account: accountReducer,
  installation: installationReducer,
  dom: domReducer,
  modules: moduleReducer,
});

export default rootReducer;
