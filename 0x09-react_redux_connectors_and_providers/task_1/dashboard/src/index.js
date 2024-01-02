import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
