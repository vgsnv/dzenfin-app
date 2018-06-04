import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import {
  REQUESTED_LOGIN,
  REQUESTED_SUCCEEDED,
  REQUESTED_FAILED
} from "store/app/userinfo";

import getuserinfo from "api/getuserinfo";

export default function* watchFetchUserInfo() {
  yield takeEvery(REQUESTED_LOGIN, fetchUserInfoAsync);
}

export function* fetchUserInfoAsync(action) {
  const history = action.data.history;
  try {
    const data = yield call(getuserinfo);
    console.log('data', data)
    yield put({ type: REQUESTED_SUCCEEDED, data });
    yield call(history.push, "/months/2017/11");
  } catch (error) {
    yield put({ type: REQUESTED_FAILED, error });
    yield call(history.push, "/sign");
  }
}
