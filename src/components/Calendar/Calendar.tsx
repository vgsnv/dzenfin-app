import * as React from 'react';
import { Link } from 'react-router-dom';

import * as css from './styles.less'

export interface Props {
  budgets: Array<number>
}

export interface Dispatch {
}

export interface State {
}

export class Calendar extends React.Component<Props & Dispatch, State>{

  renderItem() {

    const {
      budgets
    } = this.props;

    return budgets.map((budget, index) => {
      return (
        <div
          key={index}
          className={css.calendarItem}
        >
          <Link
            style={{display:'block'}} 
          to={`/`}>
            {budget}
          </Link>
        </div>)
    })
  }

  render() {

    const renderItem = this.renderItem();

    return (
      <section
        className={css.calendar}
      >
        {renderItem}
      </section>
    );
  }
};