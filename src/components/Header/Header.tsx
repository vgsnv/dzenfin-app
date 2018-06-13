import * as React from "react";

import * as css from "./styles.less";

import * as ui from "ui";

import Logo from "components/Logo";
import Menu from "components/Menu";

import { getPageTitile } from "../../helpers/sharedFunctions";

export interface Props {}

export interface Dispatch {}

export interface State {}

export class Header extends React.Component<Props & Dispatch, State> {
  render() {
    return (
      <ui.Row>
        <header className={css.header}>
          <Logo />
          <p>{getPageTitile()}</p>
          <Menu />
        </header>
      </ui.Row>
    );
  }
}
