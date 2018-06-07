import * as React from "react";
import { connect } from "react-redux";

import { sign } from "store/sagas/sign";
import { logout } from "store/sagas/logout";
import { nextRegister } from "store/sagas/nextRegister";
import { demo } from "store/sagas/demo";

import * as css from "./styles.less";
import * as ui from "ui";

export interface Props {}

export interface Dispatch {
  nextSign: () => void;
  nextRegister: () => void;
  nextDemoApp: () => void;
  nextLogout: () => void;
}

export interface State {}

class Component extends React.Component<Props & Dispatch, State> {
  render() {
    const loginBtn = {
      title: "Войти",
      onClick: () => this.props.nextSign(),
      type: ui.ButtonType.ENABLED
    };

    const registerBtn = {
      title: "Регистрация",
      onClick: () => this.props.nextRegister(),
      type: ui.ButtonType.ENABLED
    };

    const loginDemoBtn = {
      title: "Попробовать",
      onClick: () => this.props.nextDemoApp(),
      type: ui.ButtonType.ENABLED
    };

    const logoutBtn = {
      title: "Выйти",
      onClick: () => this.props.nextLogout(),
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
  nextSign: () => dispatch(sign()),
  nextRegister: () => dispatch(nextRegister()),
  nextDemoApp: () => dispatch(demo()),
  nextLogout: () => dispatch(logout())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
