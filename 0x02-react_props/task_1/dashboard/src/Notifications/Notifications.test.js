import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notification component tests', () => {
  it('Test that Notifications renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('Test that Notifications renders three list items', () =>{
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toHaveLength(3);
  });

  it('Test Notifications renders the text `Here is the list of notifications`', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('p').text())
      .toBe('Here is the list of notifications');
  });
});
