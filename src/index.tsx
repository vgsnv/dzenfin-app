import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from 'views/App';

const loggerMiddleware = createLogger();

const reducers = (state, action) => {
  return {
    budgets: [1,2,3,4,5,6,7,8]
  }
}

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));

store.dispatch({type: ''});