import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { Root } from './components/Root';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => (
  <Root store={store} />
);

export default App;
