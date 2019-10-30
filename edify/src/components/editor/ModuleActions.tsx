import React, { CSSProperties, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveModuleState, getActiveModule } from '../../selectors/moduleSelectors';
import { EDITOR_BAR_WIDTH } from './EditorBar';
import { previewModule, disableModule, activateModule } from '../../actions/moduleActions';
import { getOriginalDom, getCurrentDom } from '../../selectors/domSelectors';
import { handleError } from '../../util';

const MODULE_ACTIONS_MARGIN = 50;

const moduleActionsStyle: CSSProperties = {
  position: 'fixed',
  bottom: MODULE_ACTIONS_MARGIN,
  left: EDITOR_BAR_WIDTH + MODULE_ACTIONS_MARGIN,
};

const ModuleActions = () => {
  const moduleState = useSelector(getActiveModuleState);
  const activeModule = useSelector(getActiveModule);
  const originalDom = useSelector(getOriginalDom);
  const currentDom = useSelector(getCurrentDom);
  const dispatch = useDispatch();

  const onPreviewClick = useCallback(
    () => {
      if (activeModule == null) {
        handleError(new Error('Tried to preview DOM, but active module is null or undefined.'));
        return;
      }
      if (currentDom == null) {
        handleError(new Error('Tried to preview DOM, but current Dom is null or undefined.'));
        return;
      }
      dispatch(previewModule(activeModule, originalDom, currentDom));
    },
    [activeModule, currentDom, dispatch, originalDom],
  );

  const onPublishClick = useCallback(
    () => {
      alert('Not supported yet');
      // TODO: Implement publish functionality
    },
    [],
  );

  const onDisable = useCallback(
    () => {
      if (activeModule == null) {
        handleError(new Error('Tried to preview DOM, but active module is null or undefined.'));
        return;
      }
      if (currentDom == null) {
        handleError(new Error('Tried to preview DOM, but current Dom is null or undefined.'));
        return;
      }
      dispatch(disableModule(activeModule, originalDom, currentDom));
    },
    [dispatch, activeModule, originalDom, currentDom],
  );

  const onActivate = useCallback(
    () => {
      if (activeModule == null) {
        handleError(new Error('Tried to preview DOM, but active module is null or undefined.'));
        return;
      }
      if (currentDom == null) {
        handleError(new Error('Tried to preview DOM, but current Dom is null or undefined.'));
        return;
      }
      dispatch(activateModule(activeModule, originalDom, currentDom));
    },
    [activeModule, currentDom, dispatch, originalDom],
  );

  return (
    <div style={moduleActionsStyle}>
      {moduleState === 'active' && (
      <>
        <button onClick={onPreviewClick} type="button">PREVIEW</button>
        <button onClick={onDisable} type="button">CANCEL</button>
      </>
      )}
      {moduleState === 'preview' && (
      <>
        <button onClick={onPublishClick} type="button">PUBLISH</button>
        <button onClick={onActivate} type="button">GO BACK</button>
      </>
      )}
    </div>
  );
};

export default ModuleActions;
