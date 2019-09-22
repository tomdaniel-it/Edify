export const FETCH_INSTALLATION_STATUS: 'FETCH_INSTALLATION_STATUS'
  = 'FETCH_INSTALLATION_STATUS';
export const FETCH_INSTALLATION_STATUS_SUCCESS: 'FETCH_INSTALLATION_STATUS_SUCCESS'
  = 'FETCH_INSTALLATION_STATUS_SUCCESS';
export const FETCH_INSTALLATION_STATUS_FAILURE: 'FETCH_INSTALLATION_STATUS_FAILURE'
  = 'FETCH_INSTALLATION_STATUS_FAILURE';

export interface FetchInstallationStatus {
  type: typeof FETCH_INSTALLATION_STATUS,
}

export interface FetchInstallationStatusSuccess {
  type: typeof FETCH_INSTALLATION_STATUS_SUCCESS,
  payload: boolean,
}

export interface FetchInstallationStatusFailure {
  type: typeof FETCH_INSTALLATION_STATUS_FAILURE,
  payload: string,
}

export type InstallationActions
  = FetchInstallationStatus
  | FetchInstallationStatusSuccess
  | FetchInstallationStatusFailure
