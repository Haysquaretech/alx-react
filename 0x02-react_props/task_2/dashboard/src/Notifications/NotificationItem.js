function NotificationItem (props) {
  const { type, html, value } = props;
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  );
}

export default NotificationItem;