import PropTypes from 'prop-types';

import CourseListRow from './CourseListRow';
import './CourseList.css';

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
    <table id='CourseList'>
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
        {/* <CourseListRow
          textFirstCell='ES6'
          textSecondCell='60'
        />
        <CourseListRow
          textFirstCell='Webpack'
          textSecondCell='20'
        />
        <CourseListRow
          textFirstCell='React'
          textSecondCell='40'
        /> */}
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

export default CourseList;
