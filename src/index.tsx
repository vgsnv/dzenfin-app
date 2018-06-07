import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import history from "apphistory";

import { Router, Switch, Route } from "react-router-dom";

import Views from "views";

import store from "store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Views />
    </Router>
  </Provider>,

  document.getElementById("root")
);
