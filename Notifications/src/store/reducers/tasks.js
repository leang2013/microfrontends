import { INITIAL_LOAD, DELETE_TASK } from '../actions';

const initialState = {
  loading: false,
  isLoaded: false,
  tasks: {
    result: [],
  },
  error: null,
};

const Tasks = (state = initialState, ACTION) => {
  switch (ACTION.type) {
    case INITIAL_LOAD:
      return {
        ...state,
        tasks: {
          results: ACTION.payload,
        },
        loading: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: {
          results: state.tasks.results.filter((elem) => elem.id !== ACTION.payload),
        },
        loading: true,
      };
    default:
      return state;
  }
};

export default Tasks;
