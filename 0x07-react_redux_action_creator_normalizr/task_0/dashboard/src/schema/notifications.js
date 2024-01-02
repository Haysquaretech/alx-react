import * as notificationData from '../../notifications.json';

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
