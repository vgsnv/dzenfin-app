import * as React from "react";
import { connect } from "react-redux";

import { inSign } from "store/sagas/landing/inSign";
import { demo } from "store/sagas/landing/demo";

import * as css from "./styles.less";
import * as ui from "ui";

export interface Props {}

export interface Dispatch {
  inSign: () => void;
  nextDemoApp: () => void;
}

export interface State {}

class Component extends React.Component<Props & Dispatch, State> {
  render() {
    const loginBtn = {
      title: "Войти",
      onClick: () => this.props.inSign(),
      type: ui.ButtonType.ENABLED
    };

    const loginDemoBtn = {
      title: "Попробовать",
      onClick: () => this.props.nextDemoApp(),
      type: ui.ButtonType.ENABLED
    };

    return (
      <article className={css.mainBody}>
        <ui.Row>
          <ui.Button {...loginBtn} />
        </ui.Row>
        <ui.Row />
        <ui.Row>
          <ui.Button {...loginDemoBtn} />
        </ui.Row>
        <ui.Row />
      </article>
    );
  }
}

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  inSign: () => dispatch(inSign()),
  nextDemoApp: () => dispatch(demo())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
