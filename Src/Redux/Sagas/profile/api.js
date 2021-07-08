import * as CONSTANTS from '../../../Constants';

export function* getProfile(userToken) {
  console.log("Get Profile JWT TOKEN", userToken)
  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + userToken,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/user/profile`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}