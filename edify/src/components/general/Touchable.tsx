import React, { useCallback } from 'react';

const touchableStyle = {
  cursor: 'pointer',
  outline: 0,
  display: 'inherit',
};

interface TouchableProps {
  children?: React.ReactElement|React.ReactElement[]
  callback: Function
  tabIndex: number
}

const Touchable = ({ children, callback, tabIndex }: TouchableProps) => {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>|React.KeyboardEvent<HTMLAnchorElement>) => {
      if (
        e.nativeEvent instanceof MouseEvent ||
        (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === 'Enter')
      ) {
        callback();
      }
    },
    [callback],
  );

  return (
    <a
      style={touchableStyle}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
};

export default Touchable;
