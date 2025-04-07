import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NotificationList from './NotificationList';
import './NotificationCenter.css';

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const notifications = useSelector((state) => state.notifications.notifications);
    const unreadCount = notifications.filter(n => !n.read).length;
  
    return (
      <div className="notification-bell-wrapper">
        <button className="notification-bell-button" onClick={() => setIsOpen(!isOpen)}>
          🔔
          {unreadCount > 0 && (
            <span style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'red',
              borderRadius: '50%',
              padding: '2px 6px',
              color: 'white',
              fontSize: '12px'
            }}>
              {unreadCount}
            </span>
          )}
        </button>
  
        {isOpen && (
          <div className="notification-dropdown">
            <NotificationList />
          </div>
        )}
      </div>
    );
  };
  
  export default NotificationBell;
  