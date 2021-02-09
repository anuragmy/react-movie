import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/store';
import App from './App';

const reduxStore = store;
const persistor = persistStore(reduxStore);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
