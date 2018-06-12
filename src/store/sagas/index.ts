import inSign from "./inSign";
import inManagment from "./inManagment";
import logout from "./logout";
import inRegister from "./inRegister";
import demo from "./demo";
import registerOnSubmit from "./register/onSubmit";

export default function* rootSaga() {
  yield [
    inSign(),
    logout(),
    inRegister(),
    demo(),
    inManagment(),
    registerOnSubmit()
  ];
}
