import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentDom } from '../../actions/domActions';

const contentFrameStyle = {
  flexGrow: 1,
};

const iframeStyle = {
  width: '100%',
  height: '100%',
};

const ContentFrame = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const dispatch = useDispatch();

  const onIframeLoad = useCallback(
    () => {
      const ref = iframeRef.current;
      if (ref == null) {
        return;
      }
      const document = ref.contentWindow
        ? ref.contentWindow.document
        : ref.contentDocument;
      if (document == null) {
        return;
      }
      dispatch(updateCurrentDom(document));
    },
    [dispatch, iframeRef],
  );

  return (
    <div style={contentFrameStyle}>
      <iframe
        onLoad={onIframeLoad}
        ref={iframeRef}
        title="contentIFrame"
        src="/"
        frameBorder="0"
        style={iframeStyle}
      />
    </div>
  );
};

export default ContentFrame;
