import { Account } from '../types/types';

export const LOGIN: 'LOGIN' = 'LOGIN';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE: 'LOGIN_FAILURE' = 'LOGIN_FAILURE';
export const LOGOUT: 'LOGOUT' = 'LOGOUT';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE: 'LOGOUT_FAILURE' = 'LOGOUT_FAILURE';
export const CREATE_ACCOUNT: 'CREATE_ACCOUNT' = 'CREATE_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS: 'CREATE_ACCOUNT_SUCCESS' = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE: 'CREATE_ACCOUNT_FAILURE' = 'CREATE_ACCOUNT_FAILURE';

export interface Login {
  type: typeof LOGIN,
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
  payload: Account,
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE,
  payload: string,
}

export interface Logout {
  type: typeof LOGOUT,
}

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS,
}

export interface LogoutFailure {
  type: typeof LOGOUT_FAILURE,
  payload: string,
}

export interface CreateAccount {
  type: typeof CREATE_ACCOUNT,
}

export interface CreateAccountSuccess {
  type: typeof CREATE_ACCOUNT_SUCCESS,
}

export interface CreateAccountFailure {
  type: typeof CREATE_ACCOUNT_FAILURE,
  payload: string,
}

export type AccountActions
  = Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure
  | CreateAccount
  | CreateAccountSuccess
  | CreateAccountFailure
