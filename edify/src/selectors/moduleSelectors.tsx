import { ApplicationState } from '../reducers/rootReducer';
import { Module } from '../modules/Module';

export const getModules = (state: ApplicationState) => state.modules.modules;

export const getActiveModule = (state: ApplicationState) => state.modules.activeModule;

export const isModuleActive = (module: Module) => (state: ApplicationState) =>
  state.modules.activeModule && state.modules.activeModule.id === module.id;

export const getActiveModuleState = (state: ApplicationState) =>
  state.modules.activeModule && state.modules.activeModule.state;
