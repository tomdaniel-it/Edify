import {
  LOGIN, AccountActions, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../actions/accountActionTypes';

const initialState = {
  loading: false,
};

const accountReducer = (state = initialState, action: AccountActions) => {
  switch (action.type) {
    case LOGIN:
      return {
        loading: true,
        username: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        username: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
