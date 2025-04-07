import React from 'react';
import { useSelector } from 'react-redux';
import NotificationItem from './NotificationItem';

const NotificationList = () => {    
    const notifications = useSelector((state) => state.notifications.notifications);

if (notifications.length === 0) {
    return <p style={{ padding: '1rem' }}>No notifications</p>;
  }
  
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;