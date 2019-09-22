import { Account } from '../types/types';

export const LOGIN: 'LOGIN' = 'LOGIN';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE: 'LOGIN_FAILURE' = 'LOGIN_FAILURE';
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

export type AccountActions = Login | LoginSuccess | LoginFailure | CreateAccount |
  CreateAccountSuccess | CreateAccountFailure
