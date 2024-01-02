import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header /> component tests', () => {
  const wrapper = shallow(<Header />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders img tag', () => {
    expect(wrapper.find('img').exists()).toEqual(true);
  });

  it('renders h1 tag', () => {
    expect(wrapper.find('h1').exists()).toEqual(true);
  });
});
