import React from 'react';
import { useSelector } from 'react-redux';
import ModuleIcon from './ModuleIcon';
import { getModules } from '../../selectors/moduleSelectors';

const editorBarStyle = {
  backgroundColor: '#2C2C2C',
  width: 70,
};

const moduleIconContainerStyle: {
  marginTop: number,
  textAlign: 'center'
} = {
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
