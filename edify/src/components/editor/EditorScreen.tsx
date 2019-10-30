import * as React from 'react';
import FlexBox from '../general/FlexBox';
import EditorBar from './EditorBar';
import ContentFrame from './ContentFrame';
import ModuleActions from './ModuleActions';

const flexBoxStyle = {
  height: '100vh',
};

const EditorScreen = () => (
  <FlexBox style={flexBoxStyle}>
    <EditorBar />
    <ModuleActions />
    <ContentFrame />
  </FlexBox>
);

export default EditorScreen;
