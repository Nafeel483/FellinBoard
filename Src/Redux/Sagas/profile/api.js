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


export function* updateProfile(user) {
  const data = new URLSearchParams();
  data.append('name', user.name)
  data.append('password', user.password)
  data.append('username', user.username)
  data.append('photo', user.photo)

  const opt = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + user?.token,
      // token: userToken
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/user/profile/${user?.userID}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}