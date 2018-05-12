// import * as React from 'react';
// import { connect } from 'react-redux';

import * as api from 'api'

// import { Component, Props, Dispatch } from 'components/Dzenapp/Component';

// type MapStateToProps = Props;

// const mapStateToProps = (): MapStateToProps => ({});

// type MapDispatchToProps = Dispatch;

const getFetch = (year, month) => dispatch => {
  api.dzenapp(year, month);
}

// const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
//   getFetch: (year, month) => dispatch(getFetch(year, month))
// })

// export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(Component);

import * as React from "react";

import Header from 'components/Header';
import Calendar from 'components/Calendar';
import MainInfo from 'components/MainInfo';

// export default () => (
export default class extends React.Component<any, any>{

  componentDidMount(){

    const { match: { params: { year, month } } } = this.props;

    console.log('params', year, month);

    getFetch(year, month);
    let a = api.dzenapp(year, month);

    console.info('a', a)
    
  }

  render() {

    return (
      <main>
        <Header />
        <Calendar />
        <MainInfo />
      </main>
    )
  }
};