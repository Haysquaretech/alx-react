import PropTypes from 'prop-types';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  const headerRow = {
    backgroundColor: '#f5f5f5ab'
  };
  const bodyRow = {
    backgroundColor: '#deb5b545'
  };

  return (
    <tr style={isHeader ? headerRow : bodyRow}>
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
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

// Default Prop Values
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
