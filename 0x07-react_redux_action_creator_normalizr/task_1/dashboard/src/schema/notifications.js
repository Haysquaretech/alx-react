import { normalize, schema } from 'normalizr';
import * as notificationData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message
  });

const normalizedData = normalize(notificationData, notification);

export default function getAllNotificationsByUser (userId) {
  const filteredData = [];
  notificationData
    .forEach((item) => {
      if (item.author.id === userId) {
        filteredData.push(item.context);
      }
    });
  return filteredData;
}

export { normalizedData };
