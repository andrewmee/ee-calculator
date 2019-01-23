import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className="calculator">
        <input className="calculator__screen" readOnly value="5318008" />
        <img src={logo} className="calculator__logo" alt="Equal Experts" />
        <button className="calculator__button calculator__button--clear">
          <abbr title="Clear">C</abbr>
        </button>
        <fieldset className="calculator__inputs">
          <button className="calculator__button">8</button>
          <button className="calculator__button">7</button>
          <button className="calculator__button">9</button>
          <button className="calculator__button calculator__button--operation">
            <abbr title="Divide">&divide;</abbr>
          </button>
          <button className="calculator__button">4</button>
          <button className="calculator__button">5</button>
          <button className="calculator__button">6</button>
          <button className="calculator__button calculator__button--operation">
            <abbr title="Times">&times;</abbr>
          </button>
          <button className="calculator__button">1</button>
          <button className="calculator__button">2</button>
          <button className="calculator__button">3</button>
          <button className="calculator__button calculator__button--operation">
            <abbr title="Minus">&minus;</abbr>
          </button>
          <button className="calculator__button">0</button>
          <button className="calculator__button">.</button>
          <button className="calculator__button" type="submit">=</button>
          <button className="calculator__button calculator__button--operation">
            <abbr title="Plus">+</abbr>
          </button>
        </fieldset>
      </form>
    );
  }
}

export default App;
