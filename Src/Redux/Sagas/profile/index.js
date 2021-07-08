import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/profile';
import { getProfile } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';


function* getUser(action) {
  try {
    const result = yield getProfile(action.payload);
    console.log('result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GETPROFILE_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GETPROFILE_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GETPROFILE_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

export function* profileWatcher() {
  yield takeEvery(types.GETPROFILE_REQUEST, getUser);
}