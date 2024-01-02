import PropTypes from 'prop-types';

function CourseShape ({ id, name, credit }) {
  return '';
};

// Assign Proptypes
CourseShape.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
};

// Set Default PropTypes
CourseShape.defaultProps = {
  id: 0,
  name: ''
};

export default CourseShape;
