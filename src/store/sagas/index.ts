import sign from "./sign";
import logout from "./logout";
import nextRegister from "./nextRegister";
import demo from "./demo";
import register from "./register";

export default function* rootSaga() {
  yield [sign(), logout(), nextRegister(), demo(), register()];
}
