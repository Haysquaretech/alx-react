import fetch from 'node-fetch';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
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

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export function loginRequest (email, password) {
  return async dispatch => {
    boundedLogin(email, password);
    return await fetch('http://localhost:8564/login-success.json')
      .then((res) => res.json())
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  };
}
