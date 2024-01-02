import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('<Login /> component tests', () => {
  const wrapper = shallow(<Login />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders 2 input tags', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('renders 2 input tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
