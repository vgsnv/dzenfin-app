import { call, takeLatest } from "redux-saga/effects";

import history from "apphistory";

export const NEXT_REGISTER = "SAGA/NEXT_REGISTER";

export const nextRegister = () => ({
  type: NEXT_REGISTER
});

export default function* watcher() {
  yield takeLatest(NEXT_REGISTER, worker);
}

export function* worker(action) {
  // const history = action.data.history;
  yield call(history.push, { pathname: "/register" });
}
