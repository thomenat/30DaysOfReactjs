import React from 'react'
import './UserList.css';

function UserList() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
  ];
  
  return (
    <div className='container'>
    <h1>User List</h1>
    <table className='users'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
     {users.map((user) => (
      <React.Fragment key={user.id}>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      </React.Fragment>
     ))}
      </tbody>
     </table>
    </div>
  );
}

export default UserList