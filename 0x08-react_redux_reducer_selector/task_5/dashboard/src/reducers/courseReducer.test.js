import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('Test states returned by "courseReducer" function', () => {
  it('Verify that the default state returns an empty array', () => {
    const state = courseReducer();
    expect(state).toEqual([]);
  });

  it('Verify that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const actions = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20
        },
        {
          id: 3,
          name: 'React',
          credit: 40
        }
      ]
    };

    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const state = courseReducer([], actions);
    expect(state).toEqual(expected);
  });

  it('Verify that "SELECT_COURSE" returns the data with the right item updated', () => {
    const actions = {
      type: SELECT_COURSE,
      index: 2
    };

    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const state = courseReducer(initialState, actions);
    expect(state).toEqual(expected);
  });

  it('Verify that "UNSELECT_COURSE" returns the data with the right item updated', () => {
    const actions = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const state = courseReducer(initialState, actions);
    expect(state).toEqual(expected);
  });
});
