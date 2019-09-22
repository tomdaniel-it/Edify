import { Dispatch } from 'react';

import { Account } from '../types/types';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
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
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutFailure = (error: string) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const logout = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: LOGOUT,
  });

  try {
    await network.get('auth/logout.php');
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};

const createAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
});

const createAccountFailure = (error: string) => ({
  type: CREATE_ACCOUNT_FAILURE,
  payload: error,
});

export const createAccount
  = (username: string, password: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: CREATE_ACCOUNT,
    });

    try {
      await network.post('auth/init.php', { username, password });
      dispatch(createAccountSuccess());
    } catch (e) {
      dispatch(createAccountFailure(e.message));
    }
  };
