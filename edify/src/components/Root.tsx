import * as React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Store } from 'redux';
import { getInstalled, getLoading } from '../selectors/installationSelectors';
import InstallationScreen from './installation/InstallationScreen';
import EditorScreen from './editor/EditorScreen';
import LoginScreen from './login/LoginScreen';
import { getAuthenticated } from '../selectors/accountSelectors';

const RootContent = () => {
  return <EditorScreen />;
  const installed = useSelector(getInstalled);
  const isInstallationCheckLoading = useSelector(getLoading);
  const isAuthenticated = useSelector(getAuthenticated);

  if (isInstallationCheckLoading) return <>Loading...</>;
  if (!installed) return <InstallationScreen />;
  if (!isAuthenticated) return <LoginScreen />;
  return <EditorScreen />;
};

export const Root = ({ store }: { store: Store<any> }) => (
  <Provider store={store}>
    <RootContent />
  </Provider>
);
