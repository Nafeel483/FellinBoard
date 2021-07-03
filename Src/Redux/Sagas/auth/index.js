import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/auth';
import { login, register, forgot, verification } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';
import Toast from 'react-native-simple-toast';


function* loginUser(action) {
  try {
    const result = yield login(action.payload);
    console.log('result Response', result)
    if (result.status === 200) {
      yield put({ type: types.LOGIN_SUCCESS, payload: result.message });
      Toast.show(result.message.message);

      NavigationService.navigate('Home');
    }
    else {
      yield put({ type: types.LOGIN_FAILURE, payload: result.message });
      if (result.message?.error) {
        Toast.show(result.message.error);
      }
      else {
        Toast.show(result.message.message);
      }
    }
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, payload: error });
    Toast.show("Natwork Error");
    console.log("The Error", error);
  }
}


function* registerUser(action) {
  try {
    const result = yield register(action.payload);
    console.log('Nafeel result Response', result)
    if (result.status === 200) {
      yield put({ type: types.REGISTER_SUCCESS, payload: result.message });
      Toast.show(result.message.message);

      NavigationService.navigate('Login');

    }
    else {
      yield put({ type: types.REGISTER_FAILURE, payload: result.message });
      if (result.message?.error) {
        Toast.show(result.message.error);
      }
      else {
        Toast.show(result.message.message);
      }
    }
  } catch (error) {
    yield put({ type: types.REGISTER_FAILURE, payload: error });
    Toast.show("Natwork Error");
    console.log("The Error", error);
  }
}



function* forgotUser(action) {
  try {
    const result = yield forgot(action.payload);
    console.log('Nafeel result Response', result)
    if (result.status === 200) {
      yield put({ type: types.FORGOT_SUCCESS, payload: result.message });
      Toast.show(result.message.message);

      NavigationService.navigate('Verification');

    }
    else {
      yield put({ type: types.FORGOT_FAILURE, payload: result.message });
      if (result.message?.error) {
        Toast.show(result.message.error);
      }
      else {
        Toast.show(result.message.message);
      }
    }
  } catch (error) {
    yield put({ type: types.FORGOT_FAILURE, payload: error });
    Toast.show("Natwork Error");
    console.log("The Error", error);
  }
}


function* verificationUser(action) {
  try {
    const result = yield verification(action.payload);
    console.log('Nafeel result Response', result)
    if (result.status === 200) {
      yield put({ type: types.FORGOT_SUCCESS, payload: result.message });
      Toast.show(result.message.message);

      NavigationService.navigate('Login');

    }
    else {
      yield put({ type: types.FORGOT_FAILURE, payload: result.message });
      if (result.message?.error) {
        Toast.show(result.message.error);
      }
      else {
        Toast.show(result.message.message);
      }
    }
  } catch (error) {
    yield put({ type: types.FORGOT_FAILURE, payload: error });
    Toast.show("Natwork Error");
    console.log("The Error", error);
  }
}


export function* authWatcher() {
  yield takeEvery(types.LOGIN_REQUEST, loginUser);
  yield takeEvery(types.REGISTER_REQUEST, registerUser);
  yield takeEvery(types.FORGOT_REQUEST, forgotUser);
  yield takeEvery(types.VERIFICATION_REQUEST, verificationUser);
}