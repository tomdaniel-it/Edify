import { ApplicationState } from '../reducers/rootReducer';

export const getAuthenticated = (state: ApplicationState) => state.account.username !== null;

export const getError = (state: ApplicationState) => state.account.error;
