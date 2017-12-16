import * as React from 'react';
import { connect } from 'react-redux';

import { Component, Props, Dispatch } from './Component';

import { loginUpdate, passUpdate } from 'store/app/sign';

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  login: app.sign.login,
  pass: app.sign.pass,
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  loginUpdate: login => dispatch(loginUpdate(login)),
  passUpdate: pass => dispatch(passUpdate(pass)),
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);