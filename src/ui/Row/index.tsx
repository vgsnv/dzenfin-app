import * as React from "react";
import * as css from "./styles.less";

const Row = props => {
  return <section className={css.row}>{props.children}</section>;
};

export default Row;
