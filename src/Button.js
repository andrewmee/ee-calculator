import React from "react";

class Button extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.value);
  };

  render() {
    let classNames = 'calculator__button';
    if (this.props.type === "operation") {
      classNames += ` calculator__button--operation calculator__button--${this.props.value}`
    }

    return (
      <button className={classNames} onClick={this.onClick} disabled={this.props.disabled}>
        {this.props.label || this.props.value}
      </button>
    );
  }
}

export default Button;
