export const LOGIN: 'LOGIN' = 'LOGIN';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE: 'LOGIN_FAILURE' = 'LOGIN_FAILURE';

export interface Login {
  type: typeof LOGIN,
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
  payload: String,
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE,
  payload: String,
}

export type AccountActions = Login | LoginSuccess | LoginFailure
