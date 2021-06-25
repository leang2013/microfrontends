import { put, takeLatest } from 'redux-saga/effects';
import { AddTasks, ADD_TASKS } from '../actions';

export function* getTasks() {
  try {
    const { data } = { results: [] };
    yield put(AddTasks(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* tasksSaga() {
  yield takeLatest(ADD_TASKS, getTasks);
}
