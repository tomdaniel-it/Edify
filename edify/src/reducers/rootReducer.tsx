import { combineReducers } from 'redux';
import accountReducer, { AccountState } from './accountReducer';
import installationReducer, { InstallationState } from './installationReducer';

export interface ApplicationState {
  account: AccountState,
  installation: InstallationState,
}

const rootReducer = combineReducers({
  account: accountReducer,
  installation: installationReducer,
});

export default rootReducer;
