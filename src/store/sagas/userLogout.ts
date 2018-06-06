import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { SESSION_RESET, REQUESTED_SESSION_FAILED } from "store/app/session";

import logout from "api/logout";

export default function* watchSaga() {
  yield takeLatest(SESSION_RESET, workerSaga);
}

export function* workerSaga(action) {
  const history = action.data.history;
  try {
    const data = yield call(logout);
    yield call(history.push, "/");
  } catch (error) {
    yield put({ type: REQUESTED_SESSION_FAILED, error });
    yield call(history.push, "/sign");
  }
}
