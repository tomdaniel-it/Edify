import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import ModuleIcon from './ModuleIcon';
import { getModules } from '../../selectors/moduleSelectors';

export const EDITOR_BAR_WIDTH = 70;

const editorBarStyle = {
  backgroundColor: '#2C2C2C',
  width: EDITOR_BAR_WIDTH,
};

const moduleIconContainerStyle: CSSProperties = {
  marginTop: 80,
  textAlign: 'center',
};

const EditorBar = () => {
  const modules = useSelector(getModules);
  return (
    <div style={editorBarStyle}>
      <div style={moduleIconContainerStyle}>
        {modules.map((module, index) => <ModuleIcon module={module} index={index} />)}
      </div>
    </div>
  );
};

export default EditorBar;
