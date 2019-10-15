import { Dispatch } from 'react';
import { Module } from '../modules/Module';
import { ACTIVATE_MODULE, DISABLE_MODULE } from './moduleActionTypes';
import { updateCurrentDom } from './domActions';

export const activateModule
  = (module: Module, originalDom: Document, currentDom: Document) => (dispatch: Dispatch<any>) => {
    const newDom = module.activate(originalDom, currentDom);
    dispatch(updateCurrentDom(newDom));

    dispatch({
      type: ACTIVATE_MODULE,
      payload: module,
    });
  };

export const disableModule
  = (module: Module, originalDom: Document, currentDom: Document) => (dispatch: Dispatch<any>) => {
    const newDom = module.disable(originalDom, currentDom);

    dispatch(updateCurrentDom(newDom));

    dispatch({
      type: DISABLE_MODULE,
      payload: module,
    });
  };
