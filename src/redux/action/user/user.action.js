import USER_ACTION_TYPES from "./user.types";

export const loginRequest = (credentials) => ({
  type: USER_ACTION_TYPES.LOGIN_REQUEST,
  payload: credentials,
});

export const loginSucess = (user) => ({
  type: USER_ACTION_TYPES.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = () => ({
  type: USER_ACTION_TYPES.LOGIN_FAILED,
});
