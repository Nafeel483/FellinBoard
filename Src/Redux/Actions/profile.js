import { types } from "../Types/profile";

export function getUser(user) {
    return {
      type: types.GETPROFILE_REQUEST,
      payload: user
    };
  }