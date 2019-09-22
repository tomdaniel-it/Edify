import * as React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Store } from 'redux';
import { getInstalled, getLoading } from '../selectors/installationSelectors';
import { Installation } from './installation/Installation';
import { Editor } from './editor/Editor';

const RootContent = () => {
  const installed = useSelector(getInstalled);
  const isInstallationCheckLoading = useSelector(getLoading);

  if (isInstallationCheckLoading) return <>Loading...</>;
  if (!installed) return <Installation />;
  return <Editor />;
};

export const Root = ({ store }: { store: Store<any> }) => (
  <Provider store={store}>
    <RootContent />
  </Provider>
);
