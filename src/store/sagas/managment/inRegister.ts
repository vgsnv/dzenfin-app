import { call, takeLatest } from "redux-saga/effects";

import history from "apphistory";

export const IN_REGISTER = "SAGA/IN_REGISTER";

export const inRegister = () => ({
  type: IN_REGISTER
});

export default function* watcher() {
  yield takeLatest(IN_REGISTER, worker);
}

export function* worker(action) {
  // const history = action.data.history;
  yield call(history.push, { pathname: "/register" });
}
