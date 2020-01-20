import { all } from 'redux-saga/effects';
import { watchLoginUser } from './login';

export default function* rootSaga() {
  yield all([watchLoginUser()]);
}
