export const UPDATE_USER_REQUEST = "updateUserRequest";
export const GET_USER_REQUEST = "getUserRequest";
export const LOGIN_USER_REQUEST = "loginUserRequest";
export const PROGRESS = "progress";

export const dataInputLogin = [
  {
    id: "email",
    name: "Email",
    type: "text",
    required: true,
  },
  {
    id: "password",
    name: "Password",
    type: "password",
    required: true,
  },
];

export const dataInputRegister = [
  {
    id: "email",
    name: "Email",
    type: "text",
    required: true,
  },
  {
    id: "phone_number",
    name: "Phone number",
    type: "text",
    required: true,
  },
  {
    id: "password",
    name: "Password",
    type: "password",
    required: true,
  },
  {
    id: "confirm_password",
    name: "Confirm Password",
    type: "password",
    required: true,
  },
];

export const AUTH_STATE = {
  IS_AUTHENTICATED: "isAuthenticated",
  IS_PROGRESS: "isProgress",
  ERROR_AUTH: "errorsAuth",
  IS_REGISTER_SUCCESS: "isRegisterSuccess",
  USER_LOGIN: "userLogin",
  CART: "cart",
  IS_PROGRESS_UPDATE: "isProgressUpdate",
};
