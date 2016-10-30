import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import React, { Component, PropTypes } from 'react';

import Root from './containers/root';
import reducers from './reducers';

injectTapEventPlugin();

require('normalize.css/normalize.css');
require('./styles/app');


// TODO move to __DEV__ variable support
//fetch('http://localhost:3000/auth/login', {
//  method: 'POST',
//  credentials: 'include',
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//  },
//  body: JSON.stringify({ username: 'admin', password: 'admin' })
//});


const store = createStore(reducers, {}, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

