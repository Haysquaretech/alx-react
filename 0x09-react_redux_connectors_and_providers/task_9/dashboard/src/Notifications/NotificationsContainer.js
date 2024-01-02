import React, { useEffect } from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';

function NotificationsContainer (props) {
  useEffect(() => {
    fetchNotifications();
  });

  return <Notifications {...props} />;
}

export function mapStateToProps (state) {
  const newState = state.notifications.toJS();
  return {
    listNotifications: newState.notifications,
    unreadNotifications: getUnreadNotificationsByType(newState).toJS()
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (id) => dispatch(markAsAread(id)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
