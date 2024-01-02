import PropTypes from 'prop-types';
import './Notifications.css';

import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications ({ displayDrawer }) {
  function handleClick () {
    console.log('Close button has been clicked');
  }

  return (
    <>
      <div className='menuItem'>
        Your notifications
      </div>
      {displayDrawer &&
        <div className='Notifications'>
          <button
            onClick={handleClick}
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
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem
              type='default'
              value='New course available'
            />
            <NotificationItem
              type='urgent'
              value='New resume available'
            />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
