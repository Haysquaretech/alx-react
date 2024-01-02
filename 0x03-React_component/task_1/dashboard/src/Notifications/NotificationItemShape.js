import PropTypes from 'prop-types';

function NotificationItemShape ({ id, html, type, value }) {

}

// Assign Proptypes
NotificationItemShape.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default NotificationItemShape;
