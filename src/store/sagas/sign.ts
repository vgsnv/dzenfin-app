import { call, put, takeLatest } from "redux-saga/effects";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

import * as api from "api";

import history from "apphistory";

export const SIGN = "SAGA/SIGN";

export const sign = () => ({
  type: SIGN
});

export default function* watcher() {
  yield takeLatest(SIGN, worker);
}

export function* worker(action) {
  try {
    yield put({ type: CHECK_SESSION });
    const res = yield call(api.checksession);
    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      yield call(history.push, { pathname: "/months/2017/11" });
    } else {
      yield put({ type: CHECK_SESSION_FAILED });
      yield call(history.push, { pathname: "/sign" });
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, { pathname: "/sign" });
  }
}
