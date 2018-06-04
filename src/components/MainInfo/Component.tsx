import * as React from "react";
import { Link } from "react-router-dom";
import * as ui from "ui";

import * as css from "./styles.less";

export interface Props {}

export interface Dispatch {}

export interface State {}

export class Component extends React.Component<Props & Dispatch, State> {
  renderBudget() {
    return (
      <div>
        <div>Бюджет</div>
        <div>100 000</div>
      </div>
    );
  }

  render() {
    return (
      <ui.Row>
        <div className={css.mainInfo}>
          <div className={css.mainInfoItem}>{this.renderBudget()}</div>
          <div className={css.mainInfoItem}>total-balance</div>
          <div className={css.mainInfoItem}>total-spend</div>
        </div>
      </ui.Row>
    );
  }
}
