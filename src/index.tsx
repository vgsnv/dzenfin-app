import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Views from 'views';

import store from 'store';
import { loginUpdate, passUpdate, loggedInEmailUpdate, loginSuccess, loginFail } from 'store/app/sign';

import * as api from 'api';

api.getuserinfo()
  .then((res) => store.dispatch(loginSuccess({ login: res.login, isTemp: res.isTemp })))
  .catch((err) => store.dispatch(loginFail()));

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));