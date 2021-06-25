import React from 'react';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import Routing from './routes';
import Store from './store';

const App = () => (
  <>
    <Container fixed>
      <Routing />
    </Container>
  </>
);

const wrapperApp = () => (
  <Provider store={Store || {}}>
    <App />
  </Provider>

);

export default wrapperApp;
