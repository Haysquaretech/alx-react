import rootReducer from "./rootReducer";
import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";
import uiReducer from "./uiReducer";

describe('Test rootReducer function', () => {
  it('Verify that rootReducer function returns the initial state', () => {
    const expected = {
      courses: courseReducer,
      notifications: notificationReducer,
      ui: uiReducer
    };

    expect(rootReducer).toEqual(expected);
  });
});
