import * as React from "react";
import { connect } from "react-redux";

import * as api from "api";

import { sign } from "store/sagas/sign";
import { logout } from "store/sagas/logout";
import { register } from "store/sagas/register";
import { demo } from "store/sagas/demo";

import * as css from "./styles.less";
import * as ui from "ui";

export interface Props {}

export interface Dispatch {
  nextSign: (history) => void;
  nextRegister: (history) => void;
  nextDemoApp: (history) => void;
  nextLogout: (history) => void;
}

export interface State {}

class Component extends React.Component<any, any> {
  render() {
    const { history } = this.props;

    const loginBtn = {
      title: "Войти",
      onClick: () => this.props.nextSign(history),
      type: ui.ButtonType.ENABLED
    };

    const registerBtn = {
      title: "Регистрация",
      onClick: () => this.props.nextRegister(history),
      type: ui.ButtonType.ENABLED
    };

    const loginDemoBtn = {
      title: "Попробовать",
      onClick: () => this.props.nextDemoApp(history),
      type: ui.ButtonType.ENABLED
    };

    const logoutBtn = {
      title: "Выйти",
      onClick: () => this.props.nextLogout(history),
      type: ui.ButtonType.ENABLED
    };

    return (
      <article className={css.mainBody}>
        <ui.Row>
          <h1>Landing</h1>
        </ui.Row>
        <ui.Row>
          <ui.Button {...loginBtn} />
        </ui.Row>
        <ui.Row>
          <ui.Button {...registerBtn} />
        </ui.Row>
        <ui.Row>
          <ui.Button {...loginDemoBtn} />
        </ui.Row>
        <ui.Row>
          <ui.Button {...logoutBtn} />
        </ui.Row>
      </article>
    );
  }
}

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  nextSign: history => dispatch(sign({ history })),
  nextRegister: history => dispatch(register({ history })),
  nextDemoApp: history => dispatch(demo({ history })),
  nextLogout: history => dispatch(logout({ history }))
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
