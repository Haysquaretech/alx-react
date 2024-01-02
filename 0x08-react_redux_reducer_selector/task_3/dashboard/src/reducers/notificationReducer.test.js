import notificationReducer, { initalState } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('Test states retured by "notificationReducer"', () => {
  it('Verify that when no action is passed, it return initial state', () => {
    const state = notificationReducer();
    expect(state).toEqual(initalState);
  });

  it('Verify that "FETCH_NOTIFICATIONS_SUCCESS" action, sends the list of notifications in a data attribute to state', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const state = notificationReducer(initalState, action);

    expect(state).toEqual(expected);
  });

  it('Verify that "MARK_AS_READ" action when passed with "index", update notification with corresponding "id" and set "isRead" to "true"', () => {
    const previousState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    const newState = notificationReducer(previousState, action);
    expect(newState).toEqual(expected);
  });

  it('Verify that SET_TYPE_FILTER action when passed, update the filter attribute to either "DEFAULT" or "URGENT"', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    };

    const previousState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const expected = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const newState = notificationReducer(previousState, action);
    expect(newState).toEqual(expected);
  });
});
