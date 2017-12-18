const LOGIN_UPDATE = 'APP/LOGIN_UPDATE';
const PASS_UPDATE = 'APP/PASS_UPDATE';
const LOGGEDINEMAIL_UPD = 'APP/LOGGEDINEMAIL_UPD';
const LOGIN_SUCCESS = 'APP/LOGIN_SUCCESS';
const LOGIN_FAIL = 'APP/LOGIN_FAIL';

export interface Sign {
  readonly login: string;
  readonly pass: string;
  readonly loggedInEmail: string;
  readonly isTemp: boolean;
  readonly failLogin: number;
};

export const loginUpdate = (data: string) => ({
  type: LOGIN_UPDATE,
  data: data
});

export const passUpdate = (data: string) => ({
  type: PASS_UPDATE,
  data: data
});

export const loggedInEmailUpdate = (data: string) => ({
  type: LOGGEDINEMAIL_UPD,
  data: data
});

interface LoginSuccess {
  login: string;
  isTemp: boolean;
};

export const loginSuccess = (data: LoginSuccess) => ({
  type: LOGIN_SUCCESS,
  data: data
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});

const defaultSign: Sign = {
  login: '',
  pass: '',
  loggedInEmail: null,
  isTemp: true,
  failLogin: 0,
};

export default (sign: Sign = defaultSign, action) => {

  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...sign, ...{ login: action.data } };
    case PASS_UPDATE:
      return { ...sign, ...{ pass: action.data } };
    case LOGGEDINEMAIL_UPD:
      return { ...sign, ...{ loggedInEmail: action.data } };
    case LOGIN_SUCCESS:
      return {
        ...sign, ...{
          login: null,
          pass: null,
          loggedInEmail: action.data.login,
          isTemp: action.data.isTemp,
          failLogin: 0,
        }
      };
    case LOGIN_FAIL:
      return { 
        ...sign, ...{ 
          pass: '',
          loggedInEmail: null,
          failLogin: sign.failLogin + 1,
        } 
      };
    default:
      return sign;
  }

}