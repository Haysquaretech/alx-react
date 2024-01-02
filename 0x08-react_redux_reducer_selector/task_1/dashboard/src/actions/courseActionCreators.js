import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = index => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = index => ({
  type: UNSELECT_COURSE,
  index
});

// Bid and export bounded  Course actions creators
export const boundedSelectCourse = (index) => dispatch(selectCourse(index));
export const boundedUnSelectCourse = (index) => dispatch(unSelectCourse(index));
