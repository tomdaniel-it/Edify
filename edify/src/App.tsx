import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { Root } from './components/Root';
import { fetchInstallationStatus } from './actions/installationActions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch<any>(fetchInstallationStatus());

const App: React.FC = () => (
  <Root store={store} />
);

export default App;
