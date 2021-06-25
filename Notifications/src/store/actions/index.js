export const INITIAL_LOAD = 'INITIAL_LOAD';
export const DELETE_TASK = 'DELETE_TASK';

export const initialLoad = (task) => ({
  type: INITIAL_LOAD,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
