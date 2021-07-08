import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth/index';
import { profileWatcher } from './profile/index';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(profileWatcher)
  ])
}