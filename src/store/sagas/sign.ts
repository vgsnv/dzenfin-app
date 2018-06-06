import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

import * as api from "api";

export const SIGN = "SAGA/SIGN";

export const sign = data => ({
  type: SIGN,
  data
});

export default function* watcher() {
  yield takeEvery(SIGN, worker);
}

export function* worker(action) {
  const history = action.data.history;
  try {
    yield put({ type: CHECK_SESSION });
    const res = yield call(api.checksession);
    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, res });
      yield call(history.push, "/months/2017/11");
    } else {
      yield put({ type: CHECK_SESSION_FAILED });
      yield call(history.push, "/sign");
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, "/sign");
  }
}
