import { all } from 'redux-saga/effects';
import initialHome from './initialLoad';

export default function* rootSaga() {
  yield all([
    initialHome(),
  ]);
}
