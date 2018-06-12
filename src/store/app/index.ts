import { combineReducers } from "redux";
import sign from "store/app/forms/sign";
import register from "store/app/forms/register";
import session from "store/app/session";

const app = combineReducers({
  sign,
  session,
  register
});

export default app;
