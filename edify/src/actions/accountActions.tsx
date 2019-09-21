import { Dispatch } from 'react';
import axios from 'axios';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './accountActionTypes';

const loginSuccess = (username: String) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

const loginFailure = (error: String) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username: String, password: String) => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: LOGIN,
  });

  try {
    const loginResult: String = await axios.post('loginurl');
    dispatch(loginSuccess(loginResult));
  } catch (e) {
    dispatch(loginFailure('Username or password is incorrect.'));
  }
};
