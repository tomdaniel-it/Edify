import { Module } from '../modules/Module';

export const ACTIVATE_MODULE: 'ACTIVATE_MODULE' = 'ACTIVATE_MODULE';
export const PREVIEW_MODULE: 'PREVIEW_MODULE' = 'PREVIEW_MODULE';
export const DISABLE_MODULE: 'DISABLE_MODULE' = 'DISABLE_MODULE';

export interface ActivateModule {
  type: typeof ACTIVATE_MODULE,
  payload: Module,
}

export interface PreviewModule {
  type: typeof PREVIEW_MODULE,
  payload: Module,
}

export interface DisableModule {
  type: typeof DISABLE_MODULE,
  payload: Module,
}

export type ModuleActions = ActivateModule | PreviewModule | DisableModule;
