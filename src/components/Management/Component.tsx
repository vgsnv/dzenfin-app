import * as React from "react";

import * as ui from "ui";

export interface Props {}

export interface Dispatch {
  inRegister: () => void;
  nextLogout: () => void;
}

export interface State {}

export class Component extends React.Component<Props & Dispatch, State> {
  render() {
    const registerBtn = {
      title: "Регистрация",
      onClick: () => this.props.inRegister(),
      type: ui.ButtonType.ENABLED
    };

    const logoutBtn = {
      title: "Выйти",
      onClick: () => this.props.nextLogout(),
      type: ui.ButtonType.ENABLED
    };

    return (
      <article>
        <ui.Row>
          <h1>Managment</h1>
        </ui.Row>
        <ui.Row>
          <ui.Button {...registerBtn} />
        </ui.Row>
        <ui.Row>
          <ui.Button {...logoutBtn} />
        </ui.Row>
      </article>
    );
  }
}
