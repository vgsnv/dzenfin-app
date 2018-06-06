import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Views from "views";

import store from "store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
