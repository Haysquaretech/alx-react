import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Login /> component tests', () => {
  const wrapper = shallow(<Footer />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('render the text “Copyright”', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
});