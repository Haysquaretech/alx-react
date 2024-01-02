import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

export const initalState = {
  filter: NotificationTypeFilters.DEFAULT,
  notifications: []
};

export default function notificationReducer (state = initalState, actions = { type: null }) {
  switch (actions.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notification: [
          ...state.notifications,
          actions.data
            .map((notification) => ({ ...notification, isRead: false }))
        ]
      };
    }

    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map(notification => {
          if (notification.id === actions.index) {
            return {
              ...notification,
              isRead: true
            };
          }

          return {
            ...notification
          };
        })
      };
    }

    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: actions.filter
      };
    }

    default:
      return state;
  }
}
