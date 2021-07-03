import * as CONSTANTS from '../../../Constants';

export function* login(user) {
  const data = new URLSearchParams();
  data.append('email', user.email)
  data.append('password', user.password)
  const opt = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/login`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

export function* register(user) {
  console.log("Nafeel::", user)

  const data = new URLSearchParams();
  data.append('name', user.name)
  data.append('username', user.username)
  data.append('email', user.email)
  data.append('password', user.password)
  data.append('confirmPassword', user.confirmPassword)
  const opt = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    // body: JSON.stringify(user)
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/register`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}



export function* forgot(user) {

  const data = new URLSearchParams();

  data.append('email', user.email)

  const opt = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    // body: JSON.stringify(user)
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/forget-password`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


export function* verification(user) {

  const data = new URLSearchParams();

  data.append('otp', user.otp)
  data.append('password', user.password)


  const opt = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    // body: JSON.stringify(user)
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/reset-password`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}