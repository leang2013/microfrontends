export const LOAD_TASKS = 'LOAD_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const INITIAL_TASK = 'INITIAL_TASK';

export const initialTasks = () => ({
  type: INITIAL_TASK,
});

export const loadTasks = (task) => ({
  type: LOAD_TASKS,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});
