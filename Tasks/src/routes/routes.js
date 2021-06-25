import TasksPage from '../pages/TasksPage';
import CreateTaskPage from '../pages/CreateTaskPage';

const routes = {
  Home: {
    id: 1,
    path: '/',
    exact: true.valueOf,
    component: TasksPage,
  },
  CreateTask: {
    id: 2,
    path: '/createTask',
    exact: true.valueOf,
    component: CreateTaskPage,
  },
};

export default routes;
