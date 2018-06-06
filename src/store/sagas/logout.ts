import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { SESSION_RESET, CHECK_SESSION_FAILED } from "store/app/session";

import * as api from "api";

export const LOGOUT = "SAGA/LOGOUT";

export const logout = data => ({
  type: LOGOUT,
  data
});

export default function* watcher() {
  yield takeLatest(LOGOUT, worker);
}

export function* worker(action) {
  yield put({ type: SESSION_RESET });

  const history = action.data.history;
  try {
    const data = yield call(api.destroysession);
    yield call(history.push, "/");
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, "/sign");
  }
}
