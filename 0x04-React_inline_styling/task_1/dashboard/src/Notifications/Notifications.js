import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render () {
    const { displayDrawer, listNotifications } = this.props;

    const notifications = listNotifications.map(notification =>
      notification.html
        ? (
          <Fragment key={notification.id}>
            <NotificationItem
              markAsRead={this.markAsRead}
              id={notification.id}
              type={notification.type}
              html={notification.html}
            />
          </Fragment>)
        : (
          <Fragment key={notification.id}>
            <NotificationItem
              markAsRead={this.markAsRead}
              id={notification.id}
              type={notification.type}
              value={notification.value}
            />
          </Fragment>)
    );

    return (
      <>
        <div className='menuItem'>
          Your notifications
        </div>
        {displayDrawer &&
          <div className={css(styles.Notifications)}>
            <button
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
              aria-label='close'
              style={
                {
                  float: 'right'
                }
              }
            >
              <img
                width={20}
                height={20}
                className='close-icon' alt='icon'
                src={closeIcon}
              />
            </button>
            <p>
              {listNotifications.length
                ? <>Here is the list of notifications</>
                : <>No new notification for now</>}
            </p>
            {listNotifications.length > 0 &&
              <ul>{notifications}</ul>}
          </div>}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #d73953',
    padding: '1rem'
  }
});

export default Notifications;
