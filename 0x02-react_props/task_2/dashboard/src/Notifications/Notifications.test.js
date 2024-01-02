import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification component tests', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });

  it('first NotificationItem element renders the right html', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications
      .find(NotificationItem)
      .first()
      .html()
    ).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('renders the text `Here is the list of notifications`', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('p').text())
      .toBe('Here is the list of notifications');
  });
});
