import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Login from '../components/Login';
const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
