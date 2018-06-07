import { call, put, takeLatest } from "redux-saga/effects";

import history from "apphistory";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

import * as api from "api";

export const REGISTER = "SAGA/REGISTER";

export const register = () => ({
  type: REGISTER
});

export default function* watcher() {
  yield takeLatest(REGISTER, worker);
}

export function* worker(action) {
  // const history = action.data.history;
  try {
    yield put({ type: CHECK_SESSION });
    const res = yield call(api.register, "q", "ppp");
    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      // console.log("history", history);

      // history.push("/sign");
      yield call(history.push, {
        pathname: "/months/2017/11"
      });
    } else {
      yield put({ type: CHECK_SESSION_FAILED });
      // yield call(history.push, "/sign"); // todo заменить на какой-нить экран
    }
  } catch (error) {
    yield put({ type: CHECK_SESSION_FAILED, error });
    // yield call(history.push, "/sign"); // todo заменить на какой-нить экран
  }
}
