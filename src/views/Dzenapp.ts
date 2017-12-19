import * as React from 'react';
import { connect } from 'react-redux';

import { getBids } from '.././api/getBudget'

getBids({ month: 10, year: 2017 })

import { Component, Props, Dispatch} from 'components/Dzenapp/Component';

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
})

export default connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(Component);