import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

describe('Test UI Action Creators ', () => {
  it('Verify action type is LOGIN', () => {
    const expected = {
      type: LOGIN,
      user: {
        email: 'Test@gmail.com',
        password: '12345'
      }
    };
    expect(login('Test@gmail.com', '12345')).toEqual(expected);
  });

  it('Verify action type is LOGOUT', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('Verify action type is DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('Verify action type is HIDE_NOTIFICATION_DRAWER', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
