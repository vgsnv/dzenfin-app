import * as React from 'react';
import { connect } from 'react-redux';

import { Calendar, Props, Dispatch} from './Calendar';

type MapStateToProps = Props;

const mapStateToProps = (): MapStateToProps => ({
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
})

export default connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(Calendar);