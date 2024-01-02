import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render () {
    const { id, type, html, value, markAsRead } = this.props;
    const itemType = css(
      type === 'default' ? styles.default : styles.urgent
    );
    return (
      <li
        onClick={() => markAsRead(id)}
        className={itemType}
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

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },

  urgent: {
    color: 'red'
  }
});

export default NotificationItem;
