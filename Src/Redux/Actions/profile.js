import { types } from "../Types/profile";

export function getUser(user) {
    return {
      type: types.GETPROFILE_REQUEST,
      payload: user
    };
  }

  export function updateUser(user) {
    return {
      type: types.UPDATEPROFILE_REQUEST,
      payload: user
    };
  }