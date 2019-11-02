import { Dispatch } from 'react';
import { Module } from '../modules/Module';
import { SET_ACTIVE_MODULE, SET_ACTIVE_MODULE_STATE } from './moduleActionTypes';
import { updateCurrentDom } from './domActions';

export const activateModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      // TODO: prepare dom by submitting back-end request (to add data-eid's) and re-get new DOM
      const newDom = await module.addModuleToDom(originalDom, currentDom);
      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: SET_ACTIVE_MODULE_STATE,
        payload: 'active',
      });
      dispatch({
        type: SET_ACTIVE_MODULE,
        payload: module,
      });
    };

export const previewModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      const newDom = await module.removeModuleFromDom(originalDom, currentDom);
      // TODO: rewrite DOM to fix event handlers
      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: SET_ACTIVE_MODULE_STATE,
        payload: 'preview',
      });
    };

export const disableModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      const newDom = await module.removeModuleFromDom(originalDom, currentDom);
      // TODO: refresh page (maybe removeModuleFromDom isn't even necessary?)

      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: SET_ACTIVE_MODULE,
        payload: null,
      });
      dispatch({
        type: SET_ACTIVE_MODULE_STATE,
        payload: null,
      });
    };
