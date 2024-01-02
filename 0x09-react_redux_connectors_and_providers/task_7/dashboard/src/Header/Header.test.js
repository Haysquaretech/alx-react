import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Header from './Header';

describe('<Header /> component tests', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  afterEach(() => {
		jest.clearAllMocks();
	});

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
