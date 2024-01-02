import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification component tests', () => {
  const displayDrawer = true;
  const notificationList = [
    { id: 1, type: 'default', value: 'Test 1' },
    { id: 2, type: 'urgent', value: 'Test 2' },
    { id: 3, type: 'urgent', html: '<strong>Test 3</strong> - complete by EOD' }
  ];
  const notifications = shallow(
    <Notifications
      displayDrawer={displayDrawer}
      listNotifications={notificationList}
    />);

  it('renders without crashing', () => {
    // const wrapper = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('renders three list items', () => {
    expect(notifications.find(NotificationItem)).toHaveLength(notificationList.length);
  });

  it('first NotificationItem element renders the right html', () => {
    expect(notifications
      .find(NotificationItem)
      .first()
      .html()
    ).toEqual(
      '<li data-notification-type="default">Test 1</li>'
    );
  });

  it('renders the text `No new notification for now`', () => {
    const wrapper = shallow(<Notifications displayDrawer={displayDrawer} />);
    expect(wrapper.find('p').text())
      .toBe('No new notification for now');
  });

  it('renders menu item when `displayDrawer=false`', () => {
    expect(notifications.find('.menuItem')).toHaveLength(1);
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

  it('renders when the prop `listNotifications=[]`', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper).toBeDefined();
  });

  it('renders 3 list item when the prop `listNotifications` has value', () => {
    expect(notifications.find(NotificationItem)).toHaveLength(3);
    expect(notifications.find('p').text())
    .toBe('Here is the list of notifications');
  });
});
