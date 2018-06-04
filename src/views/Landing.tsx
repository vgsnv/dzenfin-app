import * as React from "react";
import { connect } from "react-redux";

import { requestLogin } from "store/app/userinfo";

import * as css from "./styles.less";
import * as ui from "ui";

import * as api from "api";

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

const nextSign = history => dispatch => {
  // api.getuserinfo()
  //   .then((msg) => {
  //     if (msg.status === 'success') {
  //       history.push('/months/2017/11');
  //       let body = msg.body;
  //       dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
  //     } else {
  //       history.push('/sign');
  //       dispatch(loginFail())
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('bad', err);
  //   });
};

const nextRegister = history => dispatch => {
  history.push("/register");
};

const nextDemoApp = history => dispatch => {
  // api.getuserinfo()
  //   .then((msg) => {
  //     if (msg.status === 'success') {
  //       history.push('/months/2017/11');
  //       let body = msg.body;
  //       dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
  //     } else {
  //       api.getdemouser()
  //         .then((msg) => {
  //           console.log('msg')
  //           if (msg.status === 'success') {
  //             history.push('/months/2017/11');
  //             let body = msg.body;
  //             dispatch(loginSuccess({ userLogin: body.userLogin, isTemp: body.isTemp }));
  //           }
  //         })
  //         .catch((err) => {
  //           history.push('/sign');
  //           dispatch(loginFail())
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('bad', err);
  //   });
};

const nextLogout = history => dispatch => {
  // api.logout()
  //   .then((msg) => {
  //     history.push('/');
  //     dispatch(loginFail())
  //   })
  //   .catch((err) => {
  //     // history.push('/sign');
  //     console.log('hello')
  //     dispatch(loginFail())
  //   });
};

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  nextSign: history => dispatch(requestLogin({ history: history })),
  nextRegister: history => dispatch(nextRegister(history)),
  nextDemoApp: history => dispatch(nextDemoApp(history)),
  nextLogout: history => dispatch(nextLogout(history))
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
