import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { Root } from './components/Root';
import { fetchInstallationStatus } from './actions/installationActions';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer);
store.dispatch<any>(fetchInstallationStatus());

const App: React.FC = () => (
  <Root store={store} />
);

export default App;
