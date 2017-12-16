import * as React from 'react';
import { Link } from 'react-router-dom';
import * as css from './styles.less'

import * as ui from 'ui';

export interface Props {
  login: string;
  pass: string;
}

export interface Dispatch {
  loginUpdate: (login: string) => void;
  passUpdate: (pass: string) => void;
}

export interface State {
}

export class Component extends React.Component<Props & Dispatch, State>{

  render() {

    const {
      login,
      pass,
      loginUpdate,
      passUpdate
    } = this.props;

    const inputPass = {
      value: '',
      onChange: (val) => console.log('Click', val)
    };

    return (
      <div>
        <ui.Row>
          <ui.InputText
            value={login}
            onChange={(v) => loginUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.InputText
            value={pass}
            onChange={(v) => passUpdate(v)}
          />
        </ui.Row>
      </div>
    );
  }
};