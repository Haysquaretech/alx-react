import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

function CourseList ({ listCourses }) {
  const isHeader = true;

  const courses = listCourses.map(course =>
    <CourseListRow
      key={course.id}
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

export default CourseList;
