import React from 'react';

const flexBoxStyle = {
  display: 'flex',
};

interface FlexBoxProps {
  children?: React.ReactElement|React.ReactElement[]
  style: Object
}

const FlexBox = ({ children, style }: FlexBoxProps) =>
  <div style={{ ...flexBoxStyle, ...style }}>{children}</div>;

export default FlexBox;
