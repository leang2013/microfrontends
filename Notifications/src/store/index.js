import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GlobalStore } from 'redux-micro-frontend';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';
import { initialLoad } from './actions';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const globalStore = GlobalStore.Get();
const toolEnv = process.env.NODE_ENV === 'development';

const store = createStore(reducer,
  compose(
    applyMiddleware(
      ...middlewares,
    ),
    // eslint-disable-next-line no-underscore-dangle
    (window.__REDUX_DEVTOOLS_EXTENSION__ && toolEnv)
      // eslint-disable-next-line no-underscore-dangle
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ));

globalStore.RegisterStore('Tasks', store, [GlobalStore.AllowAll]);

sagaMiddleware.run(rootSaga);

const data = [{
  id: 1,
  task: 'task 1',
  priority: 'high',
  state: 'new',
  actions: ['delete', 'edit'],
},
{
  id: 2,
  task: 'task 2',
  priority: 'low',
  state: 'in-progress',
  actions: ['delete', 'edit'],
},
{
  id: 3,
  task: 'task 3',
  priority: 'high',
  state: 'new',
  actions: ['delete', 'edit'],
},
{
  id: 4,
  task: 'task 4',
  priority: 'high',
  state: 'in-progress',
  actions: ['delete', 'edit'],
},
{
  id: 5,
  task: 'task 5',
  priority: 'low',
  state: 'new',
  actions: ['delete', 'edit'],
},
{
  id: 6,
  task: 'task 6',
  priority: 'high',
  state: 'new',
  actions: ['delete', 'edit'],
},
];
store.dispatch(initialLoad(data));

export default store;
