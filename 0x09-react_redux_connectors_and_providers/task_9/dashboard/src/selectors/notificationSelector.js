import { Map } from 'immutable';
import { createSelector } from 'reselect';

export function filterTypeSelected (state) {
  return state.get('filter');
}

export function getNotifications (state) {
  return Map(state.get('notifications'));
}

export const getUnreadNotificationsByType = createSelector(
  filterTypeSelected,
  getNotifications,
  (filter, notifications) => {
    if (filter === 'DEFAULT') {
      return notifications.filter(item => !item.isRead);
    } else {
      const unreadNotifications = notifications.filter(item => !item.isRead);
      return unreadNotifications.filter(item => item.type === filter);
    }
  }
);
