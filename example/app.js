import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import routes from './routes';

import './style/style.scss';

const App = (props, context) => (
  <Router>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
