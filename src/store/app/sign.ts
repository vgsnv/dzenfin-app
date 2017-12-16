const LOGIN_UPDATE = 'APP/LOGIN_UPDATE';
const PASS_UPDATE = 'APP/PASS_UPDATE';

export interface Sign {
  readonly login: string;
  readonly pass: string;
};

export const loginUpdate = (data: string) => ({
  type: LOGIN_UPDATE,
  data: data
});

export const passUpdate = (data: string) => ({
  type: PASS_UPDATE,
  data: data
});

const defaultSign: Sign = { login: '', pass: '' };

export default (sign: Sign = defaultSign, action) => {

  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...sign, ...{ login: action.data } };
    case PASS_UPDATE:
      return { ...sign, ...{ pass: action.data } };
    default:
      return sign;
  }

}