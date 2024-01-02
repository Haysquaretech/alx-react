import React from 'react';
import { mount } from 'enzyme';
import { jest } from '@jest/globals';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('Testing <WithLogging /> HOC', () => {
  it('make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
    console.log = jest.fn();
    const Hoc = WithLogging(() => <p>Hello there</p>);
    const mock = <Hoc title='School' />;
    let wrapper = mount(mock);
    expect(console.log).toBeCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toBeCalledWith('Component Component is going to unmount');
    jest.restoreAllMocks();
  });

  it('make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
    console.log = jest.fn();
    const Hoc = WithLogging(Login);
    const mock = <Hoc />;
    let wrapper = mount(mock);
    expect(console.log).toBeCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toBeCalledWith('Component Login is going to unmount');
    jest.restoreAllMocks();
  });
});
