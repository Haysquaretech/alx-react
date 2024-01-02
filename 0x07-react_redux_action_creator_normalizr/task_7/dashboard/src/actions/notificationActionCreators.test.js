import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('Test notificationActionCreators the action creators', () => {
  it('Verify that action type returned is MARK_AS_READ', () => {
    const result = {
      type: MARK_AS_READ,
      index: 1
    };
    const action = markAsAread(1);

    expect(action).toEqual(result);
  });

  it('Verify that action type returned is SET_TYPE_FILTER', () => {
    const result = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT'
    };
    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(action).toEqual(result);
  });
});
