import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  REQUESTED_SESSION,
  REQUESTED_SESSION_SUCCEEDED,
  REQUESTED_SESSION_FAILED
} from "store/app/session";

import checksession from "api/getsession";

export default function* watchFetchUserInfo() {
  yield takeEvery(REQUESTED_SESSION, fetchUserInfoAsync);
}

export function* fetchUserInfoAsync(action) {
  const history = action.data.history;
  try {
    const res = yield call(checksession);
    if (res.success) {
      yield put({ type: REQUESTED_SESSION_SUCCEEDED, res });
      yield call(history.push, "/months/2017/11");
    } else {
      yield put({ type: REQUESTED_SESSION_FAILED });
      yield call(history.push, "/sign");
    }
  } catch (error) {
    yield put({ type: REQUESTED_SESSION_FAILED, error });
    yield call(history.push, "/sign");
  }
}
