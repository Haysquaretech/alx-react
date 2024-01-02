import React from 'react';
import './Notifications.css';

import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications () {
  function handleClick () {
    console.log('Close button has been clicked');
  }

  return (
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
        {/* <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        /> */}
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
    </div>
  );
}
