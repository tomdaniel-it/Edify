import { Dispatch } from 'react';
import {
  FETCH_INSTALLATION_STATUS_SUCCESS,
  FETCH_INSTALLATION_STATUS_FAILURE,
  FETCH_INSTALLATION_STATUS,
} from './installationActionTypes';
import * as network from '../network/network';

const fetchInstallationStatusSuccess = (status: boolean) => ({
  type: FETCH_INSTALLATION_STATUS_SUCCESS,
  payload: status,
});

const fetchInstallationStatusFailure = (error: string) => ({
  type: FETCH_INSTALLATION_STATUS_FAILURE,
  payload: error,
});

export const fetchInstallationStatus = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: FETCH_INSTALLATION_STATUS,
  });

  try {
    dispatch(fetchInstallationStatusSuccess((await network.get('installation/status.php')).installed));
  } catch (e) {
    dispatch(fetchInstallationStatusFailure(e.message));
  }
};
