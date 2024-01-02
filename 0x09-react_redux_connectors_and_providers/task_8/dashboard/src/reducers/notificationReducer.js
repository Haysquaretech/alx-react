import { Map, setIn, set, mergeDeep } from 'immutable';
import coursesNormalizer from '../schema/courses';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

export const initalState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: [],
  loading: false
});

export default function notificationReducer (state = initalState, action = { type: null }) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      Object.keys(normalizedData.notifications).forEach((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return mergeDeep(state, normalizedData);
    }

    case MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);

    case SET_LOADING_STATE:
      return set(state, 'loading', action.loading);

    default:
      return state;
  }
}
