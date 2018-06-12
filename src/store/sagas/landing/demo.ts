import { call, put, takeLatest } from "redux-saga/effects";

import * as api from "api";

import history from "apphistory";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

export const DEMO = "SAGA/DEMO";

export const demo = () => ({
  type: DEMO
});

export default function* watcher() {
  yield takeLatest(DEMO, worker);
}

export function* worker(action) {
  try {
    yield put({ type: CHECK_SESSION });
    const res = yield call(api.checksession);
    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      yield call(history.push, {
        pathname: "/months/2017/11"
      });
    } else {
      const demoUser = yield call(api.createdemouser);
      if (demoUser.success) {
        yield put({ type: CHECK_SESSION_SUCCEEDED, data: demoUser });
        yield call(history.push, {
          pathname: "/months/2017/11"
        });
      } else {
        yield put({ type: CHECK_SESSION_FAILED });
        yield call(history.push, {
          pathname: "/sign"
        });
      }
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    yield call(history.push, {
      pathname: "/sign"
    });
  }
}
