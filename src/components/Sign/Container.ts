import * as React from "react";
import { connect } from "react-redux";

import * as api from "api";

import { Component, Props, Dispatch } from "./Component";

import {
  loginUpdate,
  passUpdate,
  loggedInEmailUpdate,
  loginSuccess,
  loginFail
} from "store/app/sign";

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  login: app.sign.login,
  pass: app.sign.pass,
  loggedIn: !!app.sign.loggedInEmail ? true : false,
  failLogin: app.sign.failLogin
});

type MapDispatchToProps = Dispatch;

const sendLogin = (login, pass) => dispatch => {
  console.log("login", login, pass);
  api
    .login(login, pass)
    .then(res =>
      dispatch(loginSuccess({ login: res.login, isTemp: res.isTemp }))
    )
    .catch(err => dispatch(loginFail()));
};

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  loginUpdate: login => dispatch(loginUpdate(login)),
  passUpdate: pass => dispatch(passUpdate(pass)),
  sendLogin: (login, pass) => dispatch(sendLogin(login, pass))
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
