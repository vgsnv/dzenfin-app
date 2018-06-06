export const REQUESTED_SESSION = "APP/REQUESTED_SESSION";
export const REQUESTED_SESSION_SUCCEEDED = "APP/REQUESTED_SESSION_SUCCEEDED";
export const REQUESTED_SESSION_FAILED = "APP/REQUESTED_SESSION_FAILED";
export const SESSION_RESET = "APP/SESSION_RESET";

export interface Session {
  readonly login: string;
  readonly isTemp: boolean;
  readonly failLogin: number;
  readonly url: string;
  readonly loading: boolean;
  readonly error: boolean;
}

export const requestSession = data => ({
  type: REQUESTED_SESSION,
  data
});

export const requestSessionSuccess = data => ({
  type: REQUESTED_SESSION_SUCCEEDED,
  data
});

export const requestSessionError = () => ({
  type: REQUESTED_SESSION_FAILED
});

export const sessionReset = data => ({
  type: SESSION_RESET,
  data
});

const defaultSession: Session = {
  login: "",
  isTemp: true,
  failLogin: 0,
  url: "",
  loading: false,
  error: false
};

export default (prevSession = defaultSession, action) => {
  switch (action.type) {
    case REQUESTED_SESSION:
      return {
        ...prevSession,
        ...{
          url: "",
          loading: true,
          error: false
        }
      };
    case REQUESTED_SESSION_SUCCEEDED:
      return {
        login: action.data.body.login,
        isTemp: action.data.body.isTemp,
        failLogin: 0,
        url: action.url,
        loading: false,
        error: false
      };
    case REQUESTED_SESSION_FAILED:
      return {
        login: null,
        isTemp: null,
        failLogin: prevSession.failLogin + 1,
        url: "",
        loading: false,
        error: true
      };
    case SESSION_RESET:
      return defaultSession;
    default:
      return prevSession;
  }
};
