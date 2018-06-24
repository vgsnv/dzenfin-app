import { call, put, takeLatest } from "redux-saga/effects";

import { SESSION_RESET, CHECK_SESSION_FAILED } from "store/app/session";

import api from "api";

import history from "apphistory";

export const LOGOUT = "SAGA/LOGOUT";

export const logout = () => ({
  type: LOGOUT
});

export default function* watcher() {
  yield takeLatest(LOGOUT, worker);
}

export function* worker(action) {
  yield put({ type: SESSION_RESET });

  try {
    const data = yield call(api.destroysession);
    yield call(history.push, { pathname: "/" });
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, { pathname: "/sign" });
  }
}
