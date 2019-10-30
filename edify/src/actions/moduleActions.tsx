import { Dispatch } from 'react';
import { Module } from '../modules/Module';
import { ACTIVATE_MODULE, DISABLE_MODULE } from './moduleActionTypes';
import { updateCurrentDom } from './domActions';

export const activateModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      // TODO: prepare dom by submitting back-end request (to add data-eid's) and re-get new DOM
      const newDom = await module.activate(originalDom, currentDom);
      module.state = 'active';
      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: ACTIVATE_MODULE,
        payload: module,
      });
    };

export const previewModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      const newDom = await module.preview(originalDom, currentDom);
      module.state = 'preview';
      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: 'PREVIEW_MODULE',
        payload: module,
      });
    };

export const disableModule
  = (module: Module, originalDom: Document, currentDom: Document) =>
    async (dispatch: Dispatch<any>) => {
      const newDom = await module.disable(originalDom, currentDom);
      module.state = 'disabled';

      dispatch(updateCurrentDom(newDom));

      dispatch({
        type: DISABLE_MODULE,
        payload: module,
      });
    };
