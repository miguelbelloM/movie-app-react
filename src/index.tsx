import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./Store";

//CONTAINERS
import App from './containers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
