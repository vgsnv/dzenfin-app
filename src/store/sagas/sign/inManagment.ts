import { call, put, takeLatest, select } from "redux-saga/effects";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

import api from "api";

import history from "apphistory";

export const IN_MANAGMENT = "SAGA/IN_MANAGMENT";

export const inManagment = () => ({
  type: IN_MANAGMENT
});

export default function* watcher() {
  yield takeLatest(IN_MANAGMENT, worker);
}

export function* worker(action) {
  try {
    yield put({ type: CHECK_SESSION });

    const state = yield select(state => state);

    const {
      app: {
        sign: { login, pass }
      }
    } = state;

    const res = yield call(api.createsession, login, pass);

    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      yield call(history.push, { pathname: "managment" });
    } else {
      yield put({ type: CHECK_SESSION_FAILED });
      yield call(history.push, { pathname: "/sign" });
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, { pathname: "/sign" });
  }
}
