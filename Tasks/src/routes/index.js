import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Routing = () => (
  <ConnectedRouter history={history}>
    <Router>
      <div>
        {
                Object.keys(routes).map((route) => (
                  <Route {...routes[route]} key={routes[route].id} />
                ))
            }
      </div>
    </Router>
  </ConnectedRouter>
);

export default Routing;
