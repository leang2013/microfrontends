import { put, takeLatest, call } from 'redux-saga/effects';
import { loadTasks, INITIAL_TASK } from '../actions';
import TaskService from '../../api/client';

function getListTasks(){
  TaskService.ListTasksRequest.setId('178feccb-2cbc-4d1b-814b-3e00a93e0bfd');
  return TaskService.Client.listTasks(TaskService.ListTasksRequest);
}

export function* load() {
  try {
    const response = yield call(getListTasks);
    yield put(loadTasks(response.getModel().toObject()));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* loadTasksSaga() {
  yield takeLatest(INITIAL_TASK, load);
}
