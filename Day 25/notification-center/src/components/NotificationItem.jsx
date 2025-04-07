import React from 'react';
import { useDispatch } from 'react-redux';
import { markAsRead, removeNotification } from '../features/notifications/notificationSlice';
import './NotificationCenter.css';

const NotificationItem = ({ notification }) => {
    const dispatch = useDispatch();
  
    const handleMarkAsRead = () => {
      dispatch(markAsRead(notification.id));
    };
  
    const handleRemove = () => {
      dispatch(removeNotification(notification.id));
    };
  
    return (
      <div
        style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid #eee',
          backgroundColor: notification.read ? '#f9f9f9' : '#e8f0fe',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <p className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
            {notification.message}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {!notification.read && (
            <button onClick={handleMarkAsRead}>Mark as Read</button>
          )}
          <button onClick={handleRemove}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default NotificationItem;
  