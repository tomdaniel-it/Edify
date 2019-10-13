import { combineReducers } from 'redux';
import accountReducer, { AccountState } from './accountReducer';
import installationReducer, { InstallationState } from './installationReducer';
import domReducer, { DomState } from './domReducer';

export interface ApplicationState {
  account: AccountState,
  installation: InstallationState,
  dom: DomState,
}

const rootReducer = combineReducers({
  account: accountReducer,
  installation: installationReducer,
  dom: domReducer,
});

export default rootReducer;
