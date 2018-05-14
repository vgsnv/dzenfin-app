import { combineReducers } from 'redux';
import sign from 'store/app/sign';
import userinfo from 'store/app/userinfo';

const app = combineReducers({
  sign,
  userinfo,
});

export default app;