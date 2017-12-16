import * as React from 'react';

import Header from 'components/Header';
import Calendar from 'components/Calendar';
import MainInfo from 'components/MainInfo';

import { getBids } from '.././api/getBudget'

getBids({ month: 10, year: 2017 })

export default () => (
  <div>
    <Header />
    <Calendar />
    <MainInfo />
  </div>
);
