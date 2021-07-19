import * as CONSTANTS from '../../../Constants';

export function* getChats(userToken) {
  console.log("Get Profile JWT TOKEN", userToken)
  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + userToken,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/rooms`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// getCoversation
export function* getCoversation(user) {
  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + user?.token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/conversation/${user?.id}?offset=0&limit=30`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}