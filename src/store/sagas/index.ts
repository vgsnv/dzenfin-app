import sign from "./sign";
import logout from "./logout";
import register from "./register";
import demo from "./demo";

export default function* rootSaga() {
  yield [sign(), logout(), register(), demo()];
}
