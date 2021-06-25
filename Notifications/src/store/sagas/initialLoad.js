import { put, takeLatest, call } from 'redux-saga/effects';
import { initialLoad, INITIAL_LOAD } from '../actions';
import TaskService from '../../api/client';

export function* load() {
  try {
    TaskService.GetTaskRequest.setId('1');
    const stream = TaskService.Client.getTask(TaskService.GetTaskRequest);
    const { data } = yield call(stream);
    yield put(initialLoad(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* initialHome() {
  yield takeLatest(INITIAL_LOAD, load);
}
