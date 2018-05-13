import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dzenapp from 'views/Dzenapp'
import Sign from 'views/Sign';
import Landing from 'views/Landing';

export default () => (
  <Switch>
    <Route exact path='/' component={Landing} />    
    <Route path='/months/:year/:month' component={Dzenapp} />
    <Route path='/sign' component={Sign} />
  </Switch>
);