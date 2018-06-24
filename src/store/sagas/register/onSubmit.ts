import { call, put, takeEvery, select } from "redux-saga/effects";

import {
  CHECK_SESSION,
  CHECK_SESSION_SUCCEEDED,
  CHECK_SESSION_FAILED
} from "store/app/session";

import api from "api";

import history from "apphistory";

export const ONSUBMIT = "SAGA/REGISTER_FORM/ONSUBMIT";

export const registerFormOnSubmit = () => ({
  type: ONSUBMIT
});

export default function* watcher() {
  yield takeEvery(ONSUBMIT, worker);
}

export function* worker(action) {
  try {
    yield put({ type: CHECK_SESSION });

    const state = yield select(state => state);

    const {
      app: {
        register: { email, pass }
      }
    } = state;

    const res = yield call(api.createuser, email, pass);

    if (res.success) {
      yield put({ type: CHECK_SESSION_SUCCEEDED, data: res });
      yield call(history.push, { pathname: "managment" });
    } else {
      yield put({ type: CHECK_SESSION_FAILED });
      yield call(history.push, { pathname: "/sign" });
    }
  } catch (err) {
    yield put({ type: CHECK_SESSION_FAILED });
    yield call(history.push, { pathname: "/sign" });
  }
}
