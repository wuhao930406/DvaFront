import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'




function RouterConfig({ history,app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage')
  })

 const NotFound = dynamic({
      app,
      component: () => import('./routes/NotFound')
  })
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/main"/>} />
        <Route path="/main" component={IndexPage} />
        <Route render={() => <Redirect to="/main/404"/>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
