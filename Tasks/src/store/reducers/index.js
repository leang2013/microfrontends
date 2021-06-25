import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import taskReducer from './tasks';

const createRootReducer = (history) =>combineReducers({
  tasksState: taskReducer,
  router: connectRouter(history),
});

export default createRootReducer;