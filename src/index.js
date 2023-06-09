import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { Provider } from 'react-redux';
import { Store } from './RTK/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

