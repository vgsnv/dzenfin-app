import * as React from "react";
import * as css from "./styles.less";

import * as ui from "ui";

export interface Props {
  email: string;
  pass: string;
  rpass: string;
}

export interface Dispatch {
  emailUpdate: (email: string) => void;
  passUpdate: (pass: string) => void;
  rpassUpdate: (rpass: string) => void;
  onSubmit: () => void;
}

export interface State {}

export class Component extends React.Component<Props & Dispatch, State> {
  render() {
    const {
      email,
      pass,
      rpass,
      emailUpdate,
      passUpdate,
      rpassUpdate,
      onSubmit
    } = this.props;

    const btnSubmit = {
      onClick: () => onSubmit(),
      title: `Create`,
      type: ui.ButtonType.ENABLED
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
            value={email}
            onChange={v => emailUpdate(v)}
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
          <ui.InputText
            label={`Подтверждение`}
            value={rpass}
            onChange={v => rpassUpdate(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.Button {...btnSubmit} />
        </ui.Row>
      </div>
    );
  }
}
