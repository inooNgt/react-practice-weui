import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import 'weui';
import './style/style.scss';

const App = (props, context) => (
  <Router>
    <Route
      render={({ location }) => {
        return (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={300}>
              {/*due to the component of is async,
               * use a div as container of CSSTransition
               */}
              <div className='page-container'>
                <Switch location={location}>
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
