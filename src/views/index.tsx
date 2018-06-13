import * as React from "react";
import { Switch, Route } from "react-router-dom";
import * as css from "./styles.less";

import Header from "components/Header";
import Dzenapp from "views/Dzenapp";
import Sign from "views/Sign";
import Landing from "views/Landing";
import Register from "views/Register";
import Managment from "views/Managment";

export default () => (
  <main className={css.main}>
    <Header />

    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/months/:year/:month" component={Dzenapp} />
      <Route path="/sign" component={Sign} />
      <Route path="/register" component={Register} />
      <Route path="/managment" component={Managment} />
    </Switch>
  </main>
);
