import sign from "./sign";
import logout from "./logout";
import register from "./register";

export default function* rootSaga() {
  yield [sign(), logout(), register()];
}
