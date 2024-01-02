import { Map } from 'immutable';

export function getListCourses (state) {
  return Map(state).valueSeq();
}
