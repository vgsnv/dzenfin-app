import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Calendar from 'components/Calendar';
import Home from 'views/Home';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
);

const CALENDAR_PROPS = {
  budgets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
}


export default () => (
  <div>
    <Header />
    <Calendar {...CALENDAR_PROPS} />
    <Main />
  </div>
);