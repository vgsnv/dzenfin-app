import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dzenapp from 'views/Dzenapp'
import Sign from 'views/Sign';

export default () => (
  <Switch>
    <Route exact path='/' component={Dzenapp} />
    <Route path='/sign' component={Sign} />
  </Switch>
);