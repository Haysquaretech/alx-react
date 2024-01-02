import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';

const initialState = [];

export default function courseReducer (state = initialState, actions) {
  switch (actions.type) {
    case FETCH_COURSE_SUCCESS: {
      return actions.data;
    }

    case SELECT_COURSE: {
      return state.map(course => {
        if (course.id === actions.index) {
          return {
            ...course,
            isSelected: true
          };
        }

        return {
          ...course
        };
      });
    }

    case UNSELECT_COURSE: {
      return state.map(course => {
        if (course.id === actions.index) {
          return {
            ...course,
            isSelected: false
          };
        }

        return {
          ...course
        };
      });
    }

    default:
      return state;
  }
}
