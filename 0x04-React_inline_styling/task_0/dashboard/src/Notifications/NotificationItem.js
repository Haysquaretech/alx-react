import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render () {
    const { id, type, html, value, markAsRead } = this.props;
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
