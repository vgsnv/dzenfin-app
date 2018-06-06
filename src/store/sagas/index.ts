import sign from "./sign";
import logout from "./logout";

export default function* rootSaga() {
  yield [sign(), logout()];
}
