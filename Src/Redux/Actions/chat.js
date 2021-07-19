import { types } from "../Types/chat";

export function getUserChat(user) {
    return {
      type: types.GETCHAT_REQUEST,
      payload: user
    };
  }


export function getUserConversation(user) {
    return {
      type: types.GETCONVERSATION_REQUEST,
      payload: user
    };
  }
  