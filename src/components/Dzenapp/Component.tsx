import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ui from 'ui';

import * as css from './styles.less'

import Header from 'components/Header';
import Calendar from 'components/Calendar';
import MainInfo from 'components/MainInfo';

interface Match {
  params: {
    year: number;
    month: number;
  }
}

export interface Props {
  match?: Match
}

export interface Dispatch {
}

export interface State {
}

export class Component extends React.Component<Props & Dispatch, State>{

  render() {

    const { match: { params: { year, month } } } = this.props;

    return (
      <div>
        <Header />
        <Calendar />
        <MainInfo />
      </div>
    );
  }
};
