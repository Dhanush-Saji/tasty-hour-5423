import * as types from "./actionType";

const initState = {
  isAuth: false,
  isError: false,
  token: null,
  isLoading: true,
  userId: null,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false, isAuth: false };
    case types.GET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError: false,
      };
    case types.GET_USER_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
