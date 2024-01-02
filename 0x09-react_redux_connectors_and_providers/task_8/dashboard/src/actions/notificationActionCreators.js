import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE
} from './notificationActionTypes';

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
};

export const setLoadingState = (loading) => {
  return {
    type: SET_LOADING_STATE,
    loading
  };
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
};

// Bid and export bounded Notification actions creators
export const boundedMarkAsAread = (index) => dispatch(markAsAread(index));
export const boundedSetNotificationFiltere = (filter) => dispatch(setNotificationFilter(filter));

export function fetchNotifications () {
  return async dispatch => {
    dispatch(setLoadingState(true));
    return await fetch('http://localhost:8564/notifications.json')
      .then((res) => res.json())
      .then((notifications) => {
        dispatch(setNotifications(notifications));
        dispatch(setLoadingState(false));
      });
  };
}
