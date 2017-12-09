import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ui from 'ui';

import * as css from './styles.less'

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Component extends React.Component<Props & Dispatch, State>{

  render() {
    return (
      <ui.Row
        className={css.blank}
      >
        Blank
      </ui.Row>
    );
  }
};