import { takeLatest, call, take } from 'redux-saga/effects';
import { history } from 'history';
import { CREATE_TASK } from '../actions';
import TaskService from '../../api/client';

function createTask(task){
  TaskService.CreateTaskRequest.setName(task.name);
  return TaskService.Client.createTask(TaskService.CreateTaskRequest);
}

function forwardTo(location) {
  history.push(location);
}

export function* create() {
  try {
    const { payload } = yield take(CREATE_TASK);
    yield call(forwardTo, '/');
    yield call(createTask(payload));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* createTasksSaga() {
  yield takeLatest(CREATE_TASK, create);
}
