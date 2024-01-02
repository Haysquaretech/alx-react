import PropTypes from 'prop-types';

function CourseListRow (props) {
  const { isHeader, textFirstCell, textSecondCell } = props;

  return (
    <tr>
      {isHeader // If true <outer condition>
        ? textSecondCell === null // If value is null <inner condition>
          ? <th colSpan='2'>{textFirstCell}</th>
          : ( // Else if not null <inner condition>
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
            )
        : ( // Else if false <outer condition>
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
          )}
    </tr>
  );
}

// Assign Prop Types
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

// Default Prop Values
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
