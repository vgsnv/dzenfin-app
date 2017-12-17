const LOGIN_UPDATE = 'APP/LOGIN_UPDATE';
const PASS_UPDATE = 'APP/PASS_UPDATE';
const USEREMAIL_UPD = 'APP/USEREMAIL_UPD';

export interface Sign {
  readonly login: string;
  readonly pass: string;
  readonly userEmail: string;
};

export const loginUpdate = (data: string) => ({
  type: LOGIN_UPDATE,
  data: data
});

export const passUpdate = (data: string) => ({
  type: PASS_UPDATE,
  data: data
});

export const userEmailUpdate = (data: string) => ({
  type: USEREMAIL_UPD,
  data: data
});

const defaultSign: Sign = { login: '', pass: '', userEmail: null };

export default (sign: Sign = defaultSign, action) => {

  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...sign, ...{ login: action.data } };
    case PASS_UPDATE:
      return { ...sign, ...{ pass: action.data } };
    case USEREMAIL_UPD:
      return { ...sign, ...{ userEmail: action.data } };
    default:
      return sign;
  }

}