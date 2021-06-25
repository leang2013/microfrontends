import { ADD_TASKS } from '../actions';

const initialState = {
  loading: false,
  isLoaded: false,
  user: {
    id: 1,
    username: 'testing',
  },
  error: null,
};

const Main = (state = initialState, ACTION) => {
  switch (ACTION.type) {
    case ADD_TASKS:
      return {
        ...state,
        main: {
          actions: ACTION.data,
        },
        loading: true,
      };
    default:
      return state;
  }
};

export default Main;
