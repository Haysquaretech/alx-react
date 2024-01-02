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
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      filteredData.push(messages[notifications[id].context]);
    }
  }
  return filteredData;
}

export { normalizedData };
