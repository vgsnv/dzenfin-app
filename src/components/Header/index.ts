import * as React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { Header, Props, Dispatch } from "./Header";

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({});

export default withRouter(connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Header) as React.ComponentType<any>);
