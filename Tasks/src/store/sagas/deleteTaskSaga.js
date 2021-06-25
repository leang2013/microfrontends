import { takeLatest, call, take, put } from 'redux-saga/effects';
import { DELETE_TASK, initialTasks } from '../actions';
import TaskService from '../../api/client';

function deleteTask(id){
  TaskService.DeleteTaskRequest.setId(id);
  return TaskService.Client.deleteTask(TaskService.DeleteTaskRequest);
}

export function* deleteMethod() {
  try {
    const { payload } = yield take(DELETE_TASK);
    yield call(deleteTask(payload));
    yield put(initialTasks());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* deleteTaskSaga() {
  yield takeLatest(DELETE_TASK, deleteMethod);
}
