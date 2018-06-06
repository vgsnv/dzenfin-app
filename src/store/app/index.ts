import { combineReducers } from "redux";
import sign from "store/app/sign";
import session from "store/app/session";

const app = combineReducers({
  sign,
  session
});

export default app;
