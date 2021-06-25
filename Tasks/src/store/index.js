import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import { GlobalStore } from 'redux-micro-frontend';
import createRootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const globalStore = GlobalStore.Get();
const toolEnv = process.env.NODE_ENV === 'development';
const history = createBrowserHistory();
const middlewares = [sagaMiddleware,routerMiddleware(history)];


const store = createStore(createRootReducer(history),
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

export default store;
