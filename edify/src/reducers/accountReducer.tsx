import {
  LOGIN, AccountActions, LOGIN_SUCCESS, LOGIN_FAILURE, CREATE_ACCOUNT, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE,
} from '../actions/accountActionTypes';

interface AccountState {
  loading: boolean,
  error: string|null,
  username: string|null,
}

const initialState: AccountState = {
  loading: false,
  error: null,
  username: null,
};

const accountReducer = (state = initialState, action: AccountActions): AccountState => {
  switch (action.type) {
    case LOGIN:
      return {
        loading: true,
        username: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
