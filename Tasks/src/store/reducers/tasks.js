import { LOAD_TASKS, DELETE_TASK, INITIAL_TASK, CREATE_TASK } from '../actions';

const initialState = {
  loading: false,
  isLoaded: false,
  tasks: [],
  currentTask: {
    name: '',
  },
  error: null,
};

const Tasks = (state = initialState, ACTION) => {
  switch (ACTION.type) {
    case INITIAL_TASK:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: (ACTION.payload.itemsList) ? ACTION.payload.itemsList : [],
        loading: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TASK:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default Tasks;
