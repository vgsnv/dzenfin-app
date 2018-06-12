import * as React from "react";
import { connect } from "react-redux";

import { inManagment } from "store/sagas/inManagment";

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

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  loginUpdate: login => dispatch(loginUpdate(login)),
  passUpdate: pass => dispatch(passUpdate(pass)),
  inManagment: () => dispatch(inManagment())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
