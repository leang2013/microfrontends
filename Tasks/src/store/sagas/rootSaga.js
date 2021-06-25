import { all } from 'redux-saga/effects';
import loadTasksSaga from './loadTasksSaga';
import createTasksSaga from './createTasksSaga';
import deleteTaskSaga from './deleteTaskSaga';

export default function* rootSaga() {
  yield all([
    loadTasksSaga(),
    createTasksSaga(),
    deleteTaskSaga(),
  ]);
}
