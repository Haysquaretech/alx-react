import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { getListCourses } from '../selectors/courseSelector';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse
} from '../actions/courseActionCreators';

function CourseList ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) {
  const isHeader = true;

  useEffect(() => {
    fetchCourses();
  });

  function onChangeRow (id, checked) {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  }

  const courses = listCourses.map(course =>
    <CourseListRow
      key={course.id}
      id={course.id}
      isChecked={course.isSelected}
      onChangeRow={onChangeRow}
      textFirstCell={course.name}
      textSecondCell={course.credit}
    />
  );

  return (
    <table id='CourseList' className={css(styles.CourseList)}>
      <thead>
        <CourseListRow
          textFirstCell='Available courses'
          isHeader={isHeader}
        />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={isHeader}
        />
      </thead>
      <tbody>
        {listCourses.length > 0
          ? courses
          : <tr>No course available yet</tr>}
      </tbody>
    </table>
  );
}

// Assign Proptypes
CourseList.propTypes = {
  listCourses: PropTypes.array
};

// Set Default PropTypes
CourseList.defaultProps = {
  listCourses: []
};

// Styles
const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    border: '1px solid gray'
  }
});

export function mapStateToProps (state) {
  const newState = state.courses.toJS();
  return {
    listCourses: getListCourses(newState).toArray()
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    selectCourse: (id) => dispatch(selectCourse(id)),
    unSelectCourse: (id) => dispatch(unSelectCourse(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
