import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const notifications = useSelector((state) => state.notifications.notifications);
    const unreadCount = notifications.filter(n => !n.read).length;
  
    return (
      <div style={{ position: 'relative' }}>
        <button onClick={() => setIsOpen(!isOpen)}>
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
          <div style={{
            position: 'absolute',
            top: '2.5rem',
            right: 0,
            width: '250px',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            zIndex: 10
          }}>
            {/* You'll render <NotificationList /> here later */}
            <p>Notifications dropdown will go here</p>
          </div>
        )}
      </div>
    );
  };
  
  export default NotificationBell;
  