import * as React from 'react';

import * as css from './InputText.less';

interface Props {
  label: string;
  maxLength?: number;
  value: string;
  onChange?: (value: string, auto?: boolean) => void;
};

interface State {
};

export default class InputText extends React.Component<Props, State> {

  protected handleInputChange = (event) => {
    const target = event.target;
    this.props.onChange(target.value);
  }

  render() {

    const {
      label,
      value,
      onChange
    } = this.props;

    return (
      <div>
        <p>{label}</p>
        <input
          className={css.customInput}
          type="text"
          value={value}
          onChange={(event) => this.handleInputChange(event)} />
      </div>
    );

  };
};