import {
  InstallationActions,
  FETCH_INSTALLATION_STATUS,
  FETCH_INSTALLATION_STATUS_SUCCESS,
  FETCH_INSTALLATION_STATUS_FAILURE,
} from '../actions/installationActionTypes';

export interface InstallationState {
  loading: boolean,
  installed: boolean|null,
  error: string|null,
}

const initialState: InstallationState = {
  loading: false,
  installed: null,
  error: null,
};

const installationReducer
  = (state = initialState, action: InstallationActions): InstallationState => {
    switch (action.type) {
      case FETCH_INSTALLATION_STATUS:
        return {
          loading: true,
          installed: null,
          error: null,
        };
      case FETCH_INSTALLATION_STATUS_SUCCESS:
        return {
          loading: false,
          installed: action.payload,
          error: null,
        };
      case FETCH_INSTALLATION_STATUS_FAILURE:
        return {
          loading: false,
          installed: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };

export default installationReducer;
