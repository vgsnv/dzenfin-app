import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Header extends React.Component<Props & Dispatch, State>{

  render() {
    return (
      <header>
        <Link to={`/`}>
          Header
        </Link>
      </header>
    );
  }
};