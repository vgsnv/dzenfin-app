import * as React from 'react';
import { connect } from 'react-redux';

import * as api from 'api'

import { Component, Props, Dispatch } from 'components/Dzenapp/Component';

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const getFetch = (year, month) => dispatch => {
  api.dzenapp(year, month)
}

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  getFetch: (year, month) => dispatch(getFetch(year, month))
})

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);