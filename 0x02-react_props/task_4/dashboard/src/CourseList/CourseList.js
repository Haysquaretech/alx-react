import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList () {
  const isHeader = true;
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
        <CourseListRow
          textFirstCell='ES6'
          textSecondCell='60'
          isHeader={!isHeader}
        />
        <CourseListRow
          textFirstCell='Webpack'
          textSecondCell='20'
          isHeader={!isHeader}
        />
        <CourseListRow
          textFirstCell='React'
          textSecondCell='40'
          isHeader={!isHeader}
        />
      </tbody>
    </table>
  );
}

export default CourseList;
