import { Dispatch } from 'react';
import { Module } from '../modules/Module';
import { ACTIVATE_MODULE, DISABLE_MODULE } from './moduleActionTypes';
import { updateCurrentDom } from './domActions';

export const activateModule
  = (dispatch: Dispatch<any>) => (module: Module, originalDom: Document, currentDom: Document) => {
    const newDom = module.activate(originalDom, currentDom);

    dispatch(updateCurrentDom(newDom));

    return ({
      type: ACTIVATE_MODULE,
      payload: module,
    });
  };

export const disableModule
  = (dispatch: Dispatch<any>) => (module: Module, originalDom: Document, currentDom: Document) => {
    const newDom = module.disable(originalDom, currentDom);

    dispatch(updateCurrentDom(newDom));

    return ({
      type: DISABLE_MODULE,
      payload: module,
    });
  };
