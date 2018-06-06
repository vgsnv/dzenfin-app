import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export const REGISTER = "SAGA/REGISTER";

export const register = data => ({
  type: REGISTER,
  data
});

export default function* watcher() {
  yield takeEvery(REGISTER, worker);
}

export function* worker(action) {
  const history = action.data.history;
  yield call(history.push, "/register");
}
