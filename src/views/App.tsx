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

export default () => (
  <div>
    <Header />
    <Main />
    <Calendar />
  </div>
);