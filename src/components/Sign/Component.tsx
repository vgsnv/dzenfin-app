import * as React from "react";
import { Redirect } from "react-router-dom";
import * as css from "./styles.less";

import * as ui from "ui";

export interface Props {
  login: string;
  pass: string;
  loggedIn: boolean;
  failLogin: number;
}

export interface Dispatch {
  loginUpdate: (login: string) => void;
  passUpdate: (pass: string) => void;
  sendLogin: (login: string, pass: string) => void;
}

export interface State {}

export class Component extends React.Component<Props & Dispatch, State> {
  render() {
    const {
      login,
      pass,
      loggedIn,
      loginUpdate,
      passUpdate,
      sendLogin
    } = this.props;

    const submitBtn = {
      title: "Войти",
      onClick: () => sendLogin(login, pass),
      type: ui.ButtonType.ENABLED
    };

    if (loggedIn) {
      return <Redirect to={"months/2017/11"} />;
    }

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
            onChange={v => loginUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Пароль`}
            value={pass}
            onChange={v => passUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.Button {...submitBtn} />
        </ui.Row>
      </div>
    );
  }
}
