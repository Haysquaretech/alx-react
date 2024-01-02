import PropTypes from 'prop-types';

function NotificationItem (props) {
  const { type, html, value } = props;
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  );
}

// Assign Prop Types
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

// // Default Prop Values
NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
