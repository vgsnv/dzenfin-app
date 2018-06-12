const EMAIL_UPDATE = "APP/REGISTER_FORM_EMAIL_UPDATE";
const PASS_UPDATE = "APP/REGISTER_FORM_PASS_UPDATE";
const RPASS_UPDATE = "APP/REGISTER_FORM_RPASS_UPDATE";
const REGISTER_SUCCESS = "APP/REGISTER_FORM_REGISTER_SUCCESS";
const REGISTER_FAIL = "APP/REGISTER_FORM_REGISTER_FAIL";

export interface RegisterForm {
  readonly email: string;
  readonly pass: string;
  readonly rpass: string;
  readonly failLogin: number;
  readonly errorText: string;
}

export const emailUpdate = (data: string) => ({
  type: EMAIL_UPDATE,
  data: data
});

export const passUpdate = (data: string) => ({
  type: PASS_UPDATE,
  data: data
});

export const rpassUpdate = (data: string) => ({
  type: RPASS_UPDATE,
  data: data
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const registerFail = () => ({
  type: REGISTER_FAIL
});

const defaultState: RegisterForm = {
  email: "",
  pass: "",
  rpass: "",
  failLogin: 0,
  errorText: ""
};

export default (state: RegisterForm = defaultState, action) => {
  switch (action.type) {
    case EMAIL_UPDATE:
      return { ...state, ...{ email: action.data, errorText: "" } };
    case PASS_UPDATE:
      console.log("actin", action);
      return { ...state, ...{ pass: action.data, errorText: "" } };
    case RPASS_UPDATE:
      return { ...state, ...{ rpass: action.data, errorText: "" } };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...{
          email: null,
          pass: null,
          rpass: null,
          failLogin: 0,
          errorText: ""
        }
      };
    case REGISTER_FAIL:
      return {
        ...state,
        ...{
          failLogin: state.failLogin + 1
        }
      };
    default:
      return state;
  }
};
