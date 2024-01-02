import React from 'react';
import { mount } from 'enzyme';

import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login /> component tests', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Login />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders 2 input tags', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('renders 2 input tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('verify that the submit button is disabled by default', () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it('verify that after changing the value of the two inputs, the button is enabled', () => {
    wrapper.find('#email').simulate('change', {target: {value: 't'}});
    wrapper.find('#password').simulate('change', {target: {value: 't'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});
