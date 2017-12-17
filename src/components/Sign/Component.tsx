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

    const submitBtn = {
      title: 'Войти',
      onClick: () => console.log(),
      type: ui.ButtonType.ENABLED,
    };

    return (
      <div>
        <ui.Row>
          <h1>Вход</h1>
          <h2>Добро пожаловать</h2>
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Email`}
            value={login}
            onChange={(v) => loginUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Пароль`}
            value={pass}
            onChange={(v) => passUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.Button {...submitBtn} />
        </ui.Row>
      </div>
    );
  }
};