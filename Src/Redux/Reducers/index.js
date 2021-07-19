import { combineReducers } from 'redux'
import authReducer from './auth';
import profileReducer from './profile';
import chatReducer from './chat';

export default combineReducers({
  auth: authReducer,
  getprofile: profileReducer,
  allChats: chatReducer,
});