import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Calendar from 'components/Calendar';
import MainInfo from 'components/MainInfo';
import Home from 'views/Home';

import {getBids} from '.././api/getBudget'

getBids({month: 10, year: 2017})

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
);

export default () => (
  <div>
    <Header />
    <Calendar />
    <MainInfo />
    <Main />
  </div>
);