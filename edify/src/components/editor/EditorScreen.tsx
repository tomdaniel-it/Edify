import * as React from 'react';
import FlexBox from '../general/FlexBox';
import EditorBar from './EditorBar';
import ContentFrame from './ContentFrame';

const flexBoxStyle = {
  height: '100vh',
};

const EditorScreen = () => (
  <FlexBox style={flexBoxStyle}>
    <EditorBar />
    <ContentFrame />
  </FlexBox>
);

export default EditorScreen;
