import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from '../pages/registration';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RegistrationPage />, div)
})

it('renders a username input', () => {
  expect(shallow(<RegistrationPage />).find('#username').length).toEqual(1)
 })
it('renders an email input', () => {
  expect(shallow(<RegistrationPage />).find('#email').length).toEqual(1)
 })
it('renders a password button', () => {
  expect(shallow(<RegistrationPage />).find('#password').length).toEqual(1)
})
