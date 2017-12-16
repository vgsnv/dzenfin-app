import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'views/Home';

import Dzenapp from './Dzenapp'

export default () => (
  <Switch>
    <Route exact path='/' component={Dzenapp} />
    <Route path='/sign' component={Home} />
  </Switch>
);