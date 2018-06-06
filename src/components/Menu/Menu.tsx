import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export interface Dispatch {}

export interface State {}

export default class extends React.Component<Props & Dispatch, State> {
  render() {
    return (
      <div>
        <Link to={`/`}>MENU</Link>
      </div>
    );
  }
}
