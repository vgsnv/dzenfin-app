import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import * as api from "api";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

export const DEMO = "SAGA/DEMO";

export const demo = data => ({
  type: DEMO,
  data
});

export default function* watcher() {
  yield takeEvery(DEMO, worker);
}

export function* worker(action) {
  const history = action.data.history;
  try {
    yield put({ type: CHECK_SESSION });
    const res = yield call(api.checksession);
    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      yield call(history.push, "/months/2017/11");
    } else {
      const demoUser = yield call(api.createdemouser);
      if (demoUser.success) {
        yield put({ type: CHECK_SESSION_SUCCEEDED, data: demoUser });
        yield call(history.push, "/months/2017/11");
      } else {
        yield put({ type: CHECK_SESSION_FAILED });
        yield call(history.push, "/sign");
      }
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, "/sign");
  }
}
