import React from 'react';
import withLoading from './withLoading';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withLoading(UserList); 