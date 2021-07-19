import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/chat';
import { getChats, getCoversation } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';


function* getUserChat(action) {
  try {
    const result = yield getChats(action.payload);
    console.log('result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GETCHAT_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GETCHAT_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GETCHAT_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

function* getUserConversation(action) {
  try {
    const result = yield getCoversation(action.payload);
    console.log('result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GETCONVERSATION_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GETCONVERSATION_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GETCONVERSATION_FAILURE, payload: error });
    console.log("The Error", error);
  }
}



export function* chatWatcher() {
  yield takeEvery(types.GETCHAT_REQUEST, getUserChat);
  yield takeEvery(types.GETCONVERSATION_REQUEST, getUserConversation);
}