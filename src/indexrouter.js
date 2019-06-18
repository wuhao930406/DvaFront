import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import HomePage from './routes/index/HomePage'
import About from './routes/index/About'
import NotFound from './routes/NotFound'

function IndexRouterConfig() {

  return (
      <Switch>
        <Route exact path="/main" render={() => <Redirect to="/main/index"/>} />
        <Route path="/main/index" component={HomePage} />
        <Route path="/main/about" component={About} />
        <Route component={NotFound} />

      </Switch>
  );
}

export default IndexRouterConfig;
