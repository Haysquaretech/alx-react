import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(uiReducer, composedEnhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
