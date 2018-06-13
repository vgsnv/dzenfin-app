import history from "apphistory";
import { ROUTE_LOCATION } from "../constants/routes";

export const getPageTitile = () => ROUTE_LOCATION[history.location.pathname];
