import { combineReducers, createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

import { createLogger } from "redux-logger";

import app from "store/app";
import db from "store/db";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    app,
    db
  }),
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
