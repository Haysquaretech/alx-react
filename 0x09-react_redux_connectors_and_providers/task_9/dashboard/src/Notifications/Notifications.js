import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications (props) {
  const {
    displayDrawer,
    listNotifications,
    handleDisplayDrawer,
    handleHideDrawer,
    setNotificationFilter,
    markNotificationAsRead
  } = props;

  function markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
    markNotificationAsRead(id);
  }

  const notifications = listNotifications.map(notification =>
    notification.html
      ? (
        <Fragment key={notification.id}>
          <NotificationItem
            markAsRead={markAsRead}
            id={notification.id}
            type={notification.type}
            html={notification.html}
          />
        </Fragment>)
      : (
        <Fragment key={notification.id}>
          <NotificationItem
            markAsRead={markAsRead}
            id={notification.id}
            type={notification.type}
            value={notification.value}
          />
        </Fragment>)
  );

  return (
    <>
      {!displayDrawer &&
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>}

      {displayDrawer &&
        <div className={css(styles.Notifications)}>
          <button
            onClick={(e) => {
              console.log('Close button has been clicked');
              handleHideDrawer();
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
              ? (
                <>
                  Here is the list of notifications
                  <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
                  <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
                </>)
              : <>No new notification for now</>}
          </p>
          {listNotifications.length > 0 &&
            <ul className={css(styles.notificationList)}>{notifications}</ul>}
        </div>}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleHideDrawer: () => {},
  handleDisplayDrawer: () => {}
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0)'
  },

  '50%': {
    transform: 'translateY(-5px)'
  },

  '100%': {
    transform: 'translateX(5px)'
  }
};

const opacityKeyframes = {
  from: {
    opacity: 0.5
  },

  to: {
    opacity: 1
  }
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #d73953',
    padding: '1rem',
    '@media only screen and (max-width: 900px)': {
      width: '100%',
      border: 'none'
    }
  },

  menuItem: {
    backgroundColor: '#fff8f8',
    textAlign: 'right',
    marginBottom: '1rem',
    ':hover': {
      cursor: 'pointer',
      animationName: [bounceKeyframes, opacityKeyframes],
      animationDuration: '0.5s, 1s',
      animationIterationCount: 3
    }
  },

  notificationList: {
    listStyle: 'none',
    padding: '0',
    fontSize: '20'
  }
});

export default Notifications;
