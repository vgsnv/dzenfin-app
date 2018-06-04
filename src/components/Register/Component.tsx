import * as React from "react";
import * as css from "./styles.less";

import * as ui from "ui";

export interface Props {}

export interface Dispatch {}

export interface State {
  email: string;
  pass: string;
  rpass: string;
}

export class Component extends React.Component<Props & Dispatch, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      rpass: ""
    };
  }

  emailUpd = v => {
    this.setState({
      email: v
    });
  };

  passUpd = v => {
    this.setState({
      pass: v
    });
  };

  rpassUpd = v => {
    this.setState({
      rpass: v
    });
  };

  onSubmitRegister = () => {
    if (this.state.pass !== "" && this.state.pass === this.state.rpass) {
      console.log("good");
    } else {
      console.log("bad");
    }
  };

  render() {
    const btnSubmit = {
      onClick: this.onSubmitRegister,
      title: `Create`,
      type: ui.ButtonType.ENABLED
    };

    return (
      <div className={css.blank}>
        <ui.Row>
          <h1>Вход</h1>
          <h2>Добро пожаловать</h2>
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Email`}
            value={this.state.email}
            onChange={v => this.emailUpd(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Пароль`}
            value={this.state.pass}
            onChange={v => this.passUpd(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.InputText
            label={`Подтверждение`}
            value={this.state.rpass}
            onChange={v => this.rpassUpd(v)}
          />
        </ui.Row>
        <ui.Row>
          <ui.Button {...btnSubmit} />
        </ui.Row>
      </div>
    );
  }
}
