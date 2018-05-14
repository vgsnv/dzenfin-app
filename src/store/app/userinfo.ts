const LOGIN_SUCCESS = 'APP/LOGIN_SUCCESS';
const LOGIN_FAIL = 'APP/LOGIN_FAIL';

export interface Userinfo {
  readonly userLogin: string;
  readonly isTemp: boolean;
  readonly failLogin: number;
};

interface LoginSuccess {
  userLogin: string;
  isTemp: boolean;
};

export const loginSuccess = (data: LoginSuccess) => ({
  type: LOGIN_SUCCESS,
  data: data
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});

const defaultUserinfo: Userinfo = {
  userLogin: '',
  isTemp: true,
  failLogin: 0,
};

export default (prevUserinfo: Userinfo = defaultUserinfo, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...prevUserinfo, ...{
          userLogin: action.data.userLogin,
          isTemp: action.data.isTemp,
          failLogin: 0,
        }
      };
    case LOGIN_FAIL:
      return { 
        ...prevUserinfo, ...{  
          userLogin: null,
          isTemp: null,
          failLogin: prevUserinfo.failLogin + 1,
        } 
      };
    default:
      return prevUserinfo;
  }

}