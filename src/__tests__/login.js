import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../pages/login';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
})

it('renders an email input', () => {
  expect(shallow(<Login />).find('#email').length).toEqual(1)
 })
it('renders a password input', () => {
  expect(shallow(<Login />).find('#password').length).toEqual(1)
 })
it('renders a submit button', () => {
  expect(shallow(<Login />).find('#submit').length).toEqual(1)
})
