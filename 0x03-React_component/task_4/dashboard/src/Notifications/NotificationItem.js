import PropTypes from 'prop-types';

function NotificationItem (props) {
  const { id, type, html, value, markAsRead } = props;
  return (
    <li
      onClick={() => markAsRead(id)}
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
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

// // Default Prop Values
NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;
