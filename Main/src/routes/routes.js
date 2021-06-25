import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';

const routes = {
  Home: {
    id: 1,
    path: '/',
    exact: true.valueOf,
    component: MainPage,
  },
  User: {
    id: 2,
    path: '/userProfile',
    exact: true.valueOf,
    component: UserPage,
  },
};

export default routes;
