import * as React from 'react';
import { Link } from 'react-router-dom';

import * as css from './styles.less'

import Logo from 'components/Logo';
import Menu from 'components/Menu';

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Header extends React.Component<Props & Dispatch, State>{

  render() {
    return (
      <header
      className={css.header}>
        <Logo />
        <Menu />
      </header>
    );
  }
};