import * as React from "react";
import { connect } from 'react-redux';

import { loginSuccess, loginFail } from 'store/app/sign';

import * as css from './styles.less';
import * as ui from 'ui';

import * as api from 'api';

export interface Props {
}

export interface Dispatch {
  nextSign: (history) => void;
}

export interface State {
}

class Component extends React.Component<any, any>{

  render() {

    const {
      history
    } = this.props;

    const loginBtn = {
      title: 'Войти',
      onClick: () => this.props.nextSign(history),
      type: ui.ButtonType.ENABLED,
    }

    const registerBtn = {
      title: 'Регистрация',
      onClick: () => { this.props.nextSign(history) },
      type: ui.ButtonType.ENABLED,
    };

    const loginDemoBtn = {
      title: 'Создать бюджет',
      onClick: () => { },
      type: ui.ButtonType.ENABLED,
    };

    return (
      <main
        className={css.main}
      >
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
      </main>
    );
  }
};

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const nextSign = (history) => (dispatch) => {
  api.getuserinfo()
    .then((res) => {
      history.push('/months/2017/11');
      dispatch(loginSuccess({ login: res.login, isTemp: res.isTemp }));
    })
    .catch((err) => {
      history.push('/sign');
      dispatch(loginFail())
    });
}

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  nextSign: history => dispatch(nextSign(history)),
})

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);