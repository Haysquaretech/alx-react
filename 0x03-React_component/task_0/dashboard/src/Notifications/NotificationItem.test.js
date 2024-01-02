import React from 'react';
import { shallow } from 'enzyme';

import NotificationItem from './NotificationItem';

describe('<NotificationItem /> Component Test', () => {
  it('Verify that the basic rendering of the component works without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toBeDefined();
  });

  it('renders the correct html (for example: type=“default” and value=“test”)', () => {
    const wrapper = shallow(
      <NotificationItem
        type='default'
        value='test'
      />);

    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders the correct html (for example: html={{ __html: "<u>test</u>" }})', () => {
    const wrapper = shallow(
      <NotificationItem
        type='default'
        html={{ __html: '<u>test</u>' }}
      />);

    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
