import { Map, setIn, set } from 'immutable';
import coursesNormalizer from '../schema/courses';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

export const initalState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: []
});

export default function notificationReducer (state = initalState, action = { type: null }) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      Object.keys(normalizedData.notifications).forEach((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);
    }

    case MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);

    default:
      return state;
  }
}
