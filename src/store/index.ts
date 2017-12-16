import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';

import app from 'store/app';
import db from 'store/db';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    app,
    db,
  }),
  applyMiddleware(
    thunk,
    loggerMiddleware,
  ),
);

export default store;