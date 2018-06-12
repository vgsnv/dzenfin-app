import inSign from "./landing/inSign";
import inManagment from "./sign/inManagment";
import logout from "./managment/logout";
import inRegister from "./managment/inRegister";
import demo from "./landing/demo";
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
