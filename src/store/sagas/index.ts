import session from "./session";
import userLogout from "./userLogout";

export default function* rootSaga() {
  yield [session(), userLogout()];
}
