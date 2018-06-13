import { connect } from "react-redux";

import { logout } from "store/sagas/managment/logout";
import { inRegister } from "store/sagas/managment/inRegister";

import { Component, Props, Dispatch } from "./Component";

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  inRegister: () => dispatch(inRegister()),
  nextLogout: () => dispatch(logout())
});

export default connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
