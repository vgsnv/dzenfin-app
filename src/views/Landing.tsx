import * as React from "react";
import { connect } from 'react-redux';

import { loginSuccess, loginFail } from 'store/app/userinfo';

import * as css from './styles.less';
import * as ui from 'ui';

import * as api from 'api';

export interface Props {
}

export interface Dispatch {
  nextSign: (history) => void;
  nextRegister: (history) => void;
  nextDemoApp: (history) => void;
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
      title: 'Выйти',
      onClick: () => this.props.nextRegister(history),
      type: ui.ButtonType.ENABLED,
    };

    const loginDemoBtn = {
      title: 'Попробовать',
      onClick: () => this.props.nextDemoApp(history),
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
    .then((msg) => {
      if (msg.status === 'success') {
        history.push('/months/2017/11');
        let body = msg.body;
        dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
      } else {
        history.push('/sign');
        dispatch(loginFail())
      }
    })
    .catch((err) => {
      console.log('bad', err);
    });
}

const nextRegister = (history) => (dispatch) => {
  api.logout()
    .then((msg) => {
      history.push('/');
      dispatch(loginFail())
    })
    .catch((err) => {
      // history.push('/sign');
      console.log('hello')
      dispatch(loginFail())
    });
}

const nextDemoApp = (history) => (dispatch) => {
  api.getuserinfo()
    .then((msg) => {
      if (msg.status === 'success') {
        history.push('/months/2017/11');
        let body = msg.body;
        dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
      } else {
        api.getdemouser()
          .then((msg) => {
            if (msg.status === 'success') {
              history.push('/months/2017/11');
              let body = msg.body;
              dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
            } 
          })
          .catch((err) => {
            // history.push('/sign');
            dispatch(loginFail())
          });
      }
    })
    .catch((err) => {
      console.log('bad', err);
    });
}

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  nextSign: history => dispatch(nextSign(history)),
  nextRegister: history => dispatch(nextRegister(history)),
  nextDemoApp: history => dispatch(nextDemoApp(history)),
})

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);