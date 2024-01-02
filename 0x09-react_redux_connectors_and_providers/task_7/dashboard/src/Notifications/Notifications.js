import { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getUnreadNotifications } from '../selectors/notificationSelector';

import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';

class Notifications extends Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    return (nextProps.listNotifications.length > this.props.listNotifications.length) ||
      (this.props.displayDrawer !== nextProps.displayDrawer);
  }

  componentDidMount () {
    this.props.fetchNotifications();
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
    this.props.markNotificationAsRead(id);
  }

  render () {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer
    } = this.props;

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
                ? <>Here is the list of notifications</>
                : <>No new notification for now</>}
            </p>
            {listNotifications.length > 0 &&
              <ul className={css(styles.notificationList)}>{notifications}</ul>}
          </div>}
      </>
    );
  }
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

export function mapStateToProps (state) {
  const newState = state.notifications.toJS();
  return {
    listNotifications: newState.notifications,
    unreadNotifications: getUnreadNotifications(newState).toJS()
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (id) => dispatch(markAsAread(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
