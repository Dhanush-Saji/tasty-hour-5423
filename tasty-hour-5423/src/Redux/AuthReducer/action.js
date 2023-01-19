import * as types from "./actionType";

const getUserLoginReq = () => {
  return { type: types.GET_USER_LOGIN_REQUEST };
};

const getUserLoginSuccess = (payload) => {
  return { type: types.GET_USER_LOGIN_SUCCESS, payload };
};

const getUserLoginError = () => {
  return { type: types.GET_USER_LOGIN_ERROR };
};

export { getUserLoginError, getUserLoginReq, getUserLoginSuccess };
