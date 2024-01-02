import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  const row = css(
    isHeader ? styles.headerRow : styles.defaultRow
  );

  return (
    <tr className={row}>
      {isHeader // If true <outer condition>
        ? textSecondCell === null // If value is null <inner condition>
          ? <th className={css(styles.tableHeaders)} colSpan='2'>{textFirstCell}</th>
          : ( // Else if not null <inner condition>
            <>
              <th className={css(styles.tableHeaders)}>{textFirstCell}</th>
              <th className={css(styles.tableHeaders)}>{textSecondCell}</th>
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

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#f5f5f5ab'
  },

  defaultRow: {
    backgroundColor: '#deb5b545'
  },

  tableHeaders: {
    borderBottom: '1.5px solid gray'
  }
});

export default CourseListRow;
