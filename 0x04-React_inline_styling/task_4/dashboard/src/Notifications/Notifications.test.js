import React from 'react';
import { jest } from '@jest/globals';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notification component tests', () => {
  const displayDrawer = true;
  const notificationList = [
    { id: 1, type: 'default', value: 'Test 1' },
    { id: 2, type: 'urgent', value: 'Test 2' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
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

describe('Testing markAsRead method in the notification class Component', () => {
  it('Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ];
    const displayDrawer = true;
    console.log = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={displayDrawer}
        listNotifications={listNotifications}
      />);
    const consol = jest.spyOn(console, 'log');
    const elem = wrapper.find('li').first();
    elem.simulate('click');
    expect(consol).toBeCalledWith('Notification 1 has been marked as read');
    consol.mockRestore();
  });
});

describe('Testing the notification class Component re-rendering', () => {
  it('verify that when updating the props of the component with the same list, the component doesnt rerender', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ];

    const displayDrawer = true;
    console.log = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={displayDrawer}
        listNotifications={listNotifications}
      />
    );
    wrapper.setProps({ listNotifications: listNotifications });
    expect(wrapper.find(NotificationItem).length).toBe(3);
    expect(wrapper.find(NotificationItem)
      .first()
      .props()
      .value).toEqual('New course available');
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ];

    const listNotifications2 = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New course available2', type: 'default' },
      { id: 3, value: 'New resume available', type: 'urgent' },
      { id: 4, html: { __html: getLatestNotification() }, type: 'urgent' }
    ];

    const displayDrawer = true;
    console.log = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={displayDrawer}
        listNotifications={listNotifications}
      />);
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(wrapper.find('NotificationItem')
      .at(1)
      .props()
      .value)
      .toEqual('New course available2');
    expect(wrapper.find('NotificationItem')
      .length)
      .toBe(4);
  });
});
