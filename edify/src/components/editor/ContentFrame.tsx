import React from 'react';

const contentFrameStyle = {
  flexGrow: 1,
};

const iframeStyle = {
  width: '100%',
  height: '100%',
};

const ContentFrame = () => (
  <div style={contentFrameStyle}>
    <iframe title="contentIFrame" src="/" frameBorder="0" style={iframeStyle} />
  </div>
);

export default ContentFrame;
