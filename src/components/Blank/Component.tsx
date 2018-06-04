import * as React from "react";
import * as css from "./styles.less";

import * as ui from "ui";

export interface Props {}

export interface Dispatch {}

export interface State {}

export class Component extends React.Component<Props & Dispatch, State> {
  render() {
    return <div className={css.blank}>Blank</div>;
  }
}
