import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Renderer from 'react-test-renderer';

import Login from './login';

Enzyme.configure({ adapter: new Adapter() });

describe('test', () => {
  it('renders a <div> with class login', () => {
    const loginWrapper = Enzyme.shallow(<Login />);
    expect(loginWrapper.hasClass('login')).toEqual(true);
    expect(loginWrapper.type()).toEqual('div');
  })
})