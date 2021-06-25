import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GlobalStore } from 'redux-micro-frontend';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';

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

globalStore.RegisterStore('Main', store, [GlobalStore.AllowAll]);

sagaMiddleware.run(rootSaga);

export default store;
