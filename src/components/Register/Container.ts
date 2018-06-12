import { connect } from "react-redux";

import { registerFormOnSubmit } from "store/sagas/register/onSubmit";

import { Component, Props, Dispatch } from "./Component";

import { emailUpdate, passUpdate, rpassUpdate } from "store/app/forms/register";

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  email: app.register.email,
  pass: app.register.pass,
  rpass: app.register.rpass
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  emailUpdate: email => dispatch(emailUpdate(email)),
  passUpdate: pass => dispatch(passUpdate(pass)),
  rpassUpdate: rpass => dispatch(rpassUpdate(rpass)),
  onSubmit: () => dispatch(registerFormOnSubmit())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
