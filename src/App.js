import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className="calculator">
        <input className="calculator__screen" readOnly value="5318008" />
        <img src={logo} className="calculator__logo" alt="Equal Experts" />
        <Button onClick={this.handleClick} value="clear" type="operation" label={
            <abbr title="Clear">C</abbr>
          } />
        <fieldset className="calculator__inputs">
          <Button onClick={this.handleClick} value="8" />
          <Button onClick={this.handleClick} value="7" />
          <Button onClick={this.handleClick} value="9" />
          <Button disabled value="divide" type="operation" label={
            <abbr title="Divide">&divide;</abbr>
          } />
          <Button onClick={this.handleClick} value="4" />
          <Button onClick={this.handleClick} value="5" />
          <Button onClick={this.handleClick} value="6" />
          <Button disabled value="times" type="operation" label={
            <abbr title="Times">&times;</abbr>
          } />
          <Button onClick={this.handleClick} value="1" />
          <Button onClick={this.handleClick} value="2" />
          <Button onClick={this.handleClick} value="3" />
          <Button disabled value="minus" type="operation" label={
            <abbr title="Minus">&minus;</abbr>
          } />
          <Button onClick={this.handleClick} value="0" />
          <Button onClick={this.handleClick} value="." />
          <Button onClick={this.handleClick} value="equals" label="=" />
          <Button onClick={this.handleClick} value="plus" type="operation" label={
            <abbr title="Plus">+</abbr>
          } />
        </fieldset>
      </form>
    );
  }
}

export default App;
