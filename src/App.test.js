import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

describe('calculate', () => {
  it('works with no operation', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      currentValue: '3',
      operation: null,
    });
    wrapper.instance().calculate();
    expect(wrapper.state('currentValue')).toBe('3');
  });

  it('handles simple plus', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      currentValue: '3',
      storedValue: '3',
      operation: 'plus',
    });
    wrapper.instance().calculate();
    expect(wrapper.state('currentValue')).toBe(6);
  });

  it('handles decimal plus', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      currentValue: '3.5',
      storedValue: '3',
      operation: 'plus',
    });
    wrapper.instance().calculate();
    expect(wrapper.state('currentValue')).toBe(6.5);
  });
})

describe('handleClick', () => {
  it('stores current value', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    expect(wrapper.state('currentValue')).toBe('9');
  });
  
  it('clears current value', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    wrapper.instance().handleClick('clear');
    expect(wrapper.state('currentValue')).toBe(null);
  });
  
  it('appends to current value', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    wrapper.instance().handleClick('9');
    expect(wrapper.state('currentValue')).toBe('99');
  });
  
  it('appends decimals to current value (only once)', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    wrapper.instance().handleClick('.');
    wrapper.instance().handleClick('0');
    expect(wrapper.state('currentValue')).toBe('9.0');
    wrapper.instance().handleClick('.');
    expect(wrapper.state('currentValue')).toBe('9.0');
  });

  it('triggers calculation on equal', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    wrapper.instance().handleClick('plus');
    wrapper.instance().handleClick('9');
    wrapper.instance().handleClick('equals');
    expect(wrapper.state('currentValue')).toBe(18);
  });
});
