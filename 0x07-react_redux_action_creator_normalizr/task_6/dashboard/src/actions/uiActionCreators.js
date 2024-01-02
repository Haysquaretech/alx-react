import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

export function login (email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

// Bid and export bounded UI actions creators
export const boundedLogin = (email, password) => dispatch(login(email, password));
export const boundedLogout = () => dispatch(logout());
export const boundedDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundedHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
