import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Module } from '../../modules/Module';
import { getOriginalDom, getCurrentDom } from '../../selectors/domSelectors';
import { isModuleActive } from '../../selectors/moduleSelectors';
import { activateModule } from '../../actions/moduleActions';
import Touchable from '../general/Touchable';

const iconStyle = {
  width: '60%',
  margin: '0 auto 20 auto',
};

const iconActiveStyle = {
  width: '80%',
  margin: '0 auto 50 auto',
};

const ModuleIcon = ({ module, index }: { module: Module, index: number }) => {
  const originalDom = useSelector(getOriginalDom);
  const currentDom = useSelector(getCurrentDom);
  const isModuleActivated = useSelector(isModuleActive(module));
  const dispatch = useDispatch();

  const onClick = useCallback(
    () => {
      if (currentDom == null) {
        return;
      }
      dispatch(activateModule(module, originalDom, currentDom));
    },
    [currentDom, dispatch, module, originalDom],
  );

  if (currentDom == null) {
    return <></>;
  }

  return (
    <Touchable callback={onClick} tabIndex={index}>
      <img
        src={`images/module-icons/${module.icon}`}
        alt={`Module ${module.name} icon`}
        style={isModuleActivated ? iconActiveStyle : iconStyle}
      />
    </Touchable>
  );
};

export default ModuleIcon;
