import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders correctly', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly for operations', () => {
  const wrapper = shallow(<Button type="operation" value="foo" />);
  expect(wrapper).toMatchSnapshot();
});

it('handles the button click', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Button value="foo" onClick={spy} />);
  wrapper.simulate('click', {
    preventDefault: () => {},
  });
  expect(spy).toHaveBeenCalledWith('foo');
});
