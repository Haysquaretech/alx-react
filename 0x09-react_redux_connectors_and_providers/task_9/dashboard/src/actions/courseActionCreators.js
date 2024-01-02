import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

export const selectCourse = index => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = index => ({
  type: UNSELECT_COURSE,
  index
});

export const setCourses = data => ({
  type: FETCH_COURSE_SUCCESS,
  data
});

// Bid and export bounded  Course actions creators
export const boundedSelectCourse = (index) => dispatch(selectCourse(index));
export const boundedUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export function fetchCourses () {
  return async dispatch => {
    return await fetch('http://localhost:8564/courses.json')
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)));
  };
}
