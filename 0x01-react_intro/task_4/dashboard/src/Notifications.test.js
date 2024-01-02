import React from 'react';
import { swallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notification component tests', () => {
  it('Test that Notifications renders without crashing', () => {
    const notifications = swallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('Test that Notifications renders three list items', () =>{
    const notifications = swallow(<Notifications />);
    expect(notifications.find('li')).to.have.lengthOf(3);
  });

  it('Test Notifications renders the text `Here is the list of notifications`', () => {
    const notifications = swallow(<Notifications />);
    expect(notifications.find('p').text())
      .toBe('Here is the list of notifications');
  });
});
