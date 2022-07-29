import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import store from './redux/reducers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
