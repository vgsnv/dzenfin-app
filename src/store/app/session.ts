export const CHECK_SESSION = "APP/CHECK_SESSION";
export const CHECK_SESSION_SUCCEEDED = "APP/CHECK_SESSION_SUCCEEDED";
export const CHECK_SESSION_FAILED = "APP/CHECK_SESSION_FAILED";
export const SESSION_RESET = "APP/SESSION_RESET";

export interface Session {
  readonly login: string;
  readonly isTemp: boolean;
  readonly failLogin: number;
  readonly url: string;
  readonly loading: boolean;
  readonly error: boolean;
}

export const checkSession = data => ({
  type: CHECK_SESSION,
  data
});

export const checkSessionSuccess = data => ({
  type: CHECK_SESSION_SUCCEEDED,
  data
});

export const checkSessionError = () => ({
  type: CHECK_SESSION_FAILED
});

export const sessionReset = data => ({
  type: SESSION_RESET,
  data
});

const defaultSession: Session = {
  login: null,
  isTemp: null,
  failLogin: 0,
  url: "",
  loading: false,
  error: false
};

export default (prevSession = defaultSession, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return {
        ...prevSession,
        ...{
          url: "",
          loading: true,
          error: false
        }
      };
    case CHECK_SESSION_SUCCEEDED:
      return {
        login: action.data.body.login,
        isTemp: action.data.body.isTemp,
        failLogin: 0,
        url: action.url,
        loading: false,
        error: false
      };
    case CHECK_SESSION_FAILED:
      return {
        ...defaultSession,
        ...{
          error: true
        }
      };
    case SESSION_RESET:
      return defaultSession;
    default:
      return prevSession;
  }
};
