import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = id => ({
  type: SELECT_COURSE,
  index: id
});

export const unSelectCourse = id => ({
  type: UNSELECT_COURSE,
  index: id
});
