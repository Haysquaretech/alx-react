import uiReducer, { initialState } from './uiReducer';

describe('Test states returned by "uiReducer" function', () => {
  it('Verify that return state === initial state when no action is passed', () => {
    const state = uiReducer();
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('Verify that state returned === initial state when the action "SELECT_COURSE" is passed', () => {
    const action = {
      type: 'SELECT_COURSE'
    };
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('Verify that when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const action = {
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    };
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });
});
