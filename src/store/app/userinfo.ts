import { BorderBlockEndColorProperty } from "csstype";

export const REQUESTED_LOGIN = "APP/REQUESTED_LOGIN";
export const REQUESTED_SUCCEEDED = "APP/REQUESTED_SUCCEEDED";
export const REQUESTED_FAILED = "APP/REQUESTED_FAILED";

export interface Userinfo {
  readonly login: string;
  readonly isTemp: boolean;
  readonly failLogin: number;
  readonly url: string;
  readonly loading: boolean;
  readonly error: boolean;
}

export const requestLogin = data => ({
  type: REQUESTED_LOGIN,
  data
});

export const requestLoginSuccess = data => ({
  type: REQUESTED_SUCCEEDED,
  data
});

export const requestLoginError = () => ({
  type: REQUESTED_FAILED
});

const defaultUserinfo: Userinfo = {
  login: "",
  isTemp: true,
  failLogin: 0,
  url: "",
  loading: false,
  error: false
};

export default (prevUserinfo = defaultUserinfo, action) => {
  switch (action.type) {
    case REQUESTED_LOGIN:
      return {
        ...prevUserinfo,
        ...{
          url: "",
          loading: true,
          error: false
        }
      };
    case REQUESTED_SUCCEEDED:
      return {
        login: action.data.body.login,
        isTemp: action.data.body.isTemp,
        failLogin: 0,
        url: action.url,
        loading: false,
        error: false
      };
    case REQUESTED_FAILED:
      return {
        login: null,
        isTemp: null,
        failLogin: prevUserinfo.failLogin + 1,
        url: "",
        loading: false,
        error: true
      };
    default:
      return prevUserinfo;
  }
};
