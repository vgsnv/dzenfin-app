import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';

import db from 'store/db';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    db,
  }),
  applyMiddleware(
    thunk,
    loggerMiddleware
  ),
);

export default store;