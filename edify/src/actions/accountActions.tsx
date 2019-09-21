import { Dispatch } from 'react';

import { Account } from '../types/types';
import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, CREATE_ACCOUNT, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE,
} from './accountActionTypes';
import * as network from '../network/network';

const loginSuccess = (account: Account) => ({
  type: LOGIN_SUCCESS,
  payload: account,
});

const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username: string, password: string) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: LOGIN,
  });

  try {
    const result: Account = await network.post('auth/login.php', { username, password });
    dispatch(loginSuccess(result));
  } catch (e) {
    dispatch(loginFailure('Username or password is incorrect.'));
  }
};

export const createAccount = (username: string, password: string) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: CREATE_ACCOUNT,
  });

  try {
    await network.post('auth/init.php', { username, password });
    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ACCOUNT_FAILURE,
      payload: e.message,
    });
  }
};
