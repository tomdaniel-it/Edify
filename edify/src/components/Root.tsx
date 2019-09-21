import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

export const Root = ({ store }: { store: Store<any> }) => (
  <Provider store={store}>
    Hello
  </Provider>
);
