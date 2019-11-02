import { Module } from '../modules/Module';
import { ActiveModuleState } from '../reducers/moduleReducer';

export const SET_ACTIVE_MODULE: 'SET_ACTIVE_MODULE' = 'SET_ACTIVE_MODULE';
export const SET_ACTIVE_MODULE_STATE: 'SET_ACTIVE_MODULE_STATE' = 'SET_ACTIVE_MODULE_STATE';

export interface SetActiveModule {
  type: typeof SET_ACTIVE_MODULE,
  payload: Module,
}

export interface SetActiveModuleState {
  type: typeof SET_ACTIVE_MODULE_STATE,
  payload: ActiveModuleState,
}

export type ModuleActions = SetActiveModule | SetActiveModuleState;
