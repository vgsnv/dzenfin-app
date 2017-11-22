import * as React from 'react';
import { Link } from 'react-router-dom';

import * as css from './styles.less'

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Blank extends React.Component<Props & Dispatch, State>{

  render() {
    return (
      <div
        className={css.blank}
      >
        Blank
      </div>
    );
  }
};