import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import HomePage from './routes/index/HomePage'
import About from './routes/index/About'
import Develop from './routes/index/Develop'
import Achiev from './routes/index/Achiev'
import Internation from './routes/index/Internation'
import School from './routes/index/School'
import Activity from './routes/index/Activity'
import Partner from './routes/index/Partner'
import Contact from './routes/index/Contact'
import NotFound from './routes/NotFound'


function IndexRouterConfig() {

  return (
      <Switch>
        <Route exact path="/main" render={() => <Redirect to="/main/index"/>} />
        <Route path="/main/index" component={HomePage} />
        <Route path="/main/about" component={About} />
        <Route path="/main/develop" component={Develop} />
        <Route path="/main/achiev" component={Achiev} />
        <Route path="/main/internation" component={Internation} />
        <Route path="/main/school" component={School} />
        <Route path="/main/activity" component={Activity} />
        <Route path="/main/partner" component={Partner} />
        <Route path="/main/contact" component={Contact} />
        <Route component={NotFound} />

      </Switch>
  );
}

export default IndexRouterConfig;
