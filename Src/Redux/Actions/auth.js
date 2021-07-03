import { types } from "../Types/auth";

export function loginUser(user) {
  return {
    type: types.LOGIN_REQUEST,
    payload: user
  };
}

export function registerUser(user) {
  return {
    type: types.REGISTER_REQUEST,
    payload: user
  };
}

export function forgotUser(user) {
  return {
    type: types.FORGOT_REQUEST,
    payload: user
  };
}

export function verificationUser(user) {
  return {
    type: types.VERIFICATION_REQUEST,
    payload: user
  };
}