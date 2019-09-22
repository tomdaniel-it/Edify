import { ApplicationState } from '../reducers/rootReducer';

export const getInstalled = (state: ApplicationState) => state.installation.installed;

export const getLoading = (state: ApplicationState) => state.installation.loading;

export const getError = (state: ApplicationState) => state.installation.error;
