export const ADD_TASKS = 'ADD_TASKS';
export const REMOVE_TASKS = 'REMOVE_TASKS';

export const AddTasks = (task) => ({
  type: ADD_TASKS,
  payload: task,
});

export const RemoveTasks = (id) => ({
  type: REMOVE_TASKS,
  payload: id,
});
