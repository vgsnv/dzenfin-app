import * as React from "react";
import { connect } from "react-redux";

import { register } from "store/sagas/register";

import { Component, Props, Dispatch } from "./Component";

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  register: () => dispatch(register())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
