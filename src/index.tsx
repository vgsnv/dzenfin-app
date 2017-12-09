import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from 'views/App';

import store from 'store';

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));