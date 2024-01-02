export function getFullYear() {
  const toDate = Date();
  const getYear = new Date(toDate).getFullYear();
  return getYear;
}

export function getFooterCopy(isIndex) {
  if (!isIndex) {
    return 'Holberton School main dashboard';
  }
  return 'Holberton School';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
