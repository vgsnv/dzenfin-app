import * as React from 'react';
import { connect } from 'react-redux';

import * as api from 'api';

import { Component, Props, Dispatch } from './Component';

import { loginUpdate, passUpdate, userEmailUpdate } from 'store/app/sign';

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  login: app.sign.login,
  pass: app.sign.pass,
  loggedIn: !!app.sign.userEmail ? true : false,
});

type MapDispatchToProps = Dispatch;

const sendLogin = (login, pass) => (dispatch) => {
  console.log('login', login, pass)
  api.login(login, pass)
    .then((res) => dispatch(userEmailUpdate(res.login)))
    .catch((err) => {
      dispatch(userEmailUpdate(null))
    });

}

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  loginUpdate: login => dispatch(loginUpdate(login)),
  passUpdate: pass => dispatch(passUpdate(pass)),
  sendLogin: (login, pass) => dispatch(sendLogin(login, pass)),
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);