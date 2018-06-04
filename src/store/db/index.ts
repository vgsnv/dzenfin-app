import { combineReducers } from "redux";
import budgets from "./budgets";

const db = combineReducers({
  budgets
});

export default db;
