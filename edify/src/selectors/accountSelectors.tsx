import { ApplicationState } from '../reducers/rootReducer';

export const getAuthenticated = (state: ApplicationState) => state.account.username !== null;
