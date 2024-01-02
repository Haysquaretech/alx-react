import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification component tests', () => {
  const displayDrawer = true;
  const notifications = shallow(<Notifications displayDrawer={displayDrawer} />);
  it('renders without crashing', () => {
    // const wrapper = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('renders three list items', () => {
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });

  it('first NotificationItem element renders the right html', () => {
    expect(notifications
      .find(NotificationItem)
      .first()
      .html()
    ).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('renders the text `Here is the list of notifications`', () => {
    expect(notifications.find('p').text())
      .toBe('Here is the list of notifications');
  });

  it('renders menu item when `displayDrawer=false`', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('check that div.Notifications is not rendered when `displayDrawer=false`', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('check that menu item is rendered when `displayDrawer=true`', () => {
    expect(notifications.find('.menuItem')).toHaveLength(1);
  });

  it('check that div.Notifications is rendered when `displayDrawer=true`', () => {
    expect(notifications.find('div.Notifications')).toHaveLength(1);
  });
});
