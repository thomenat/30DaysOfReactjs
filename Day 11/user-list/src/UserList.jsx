import React from 'react'

function UserList() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
  ];
  
  return (
    <div className='container'>
    <h1>User List</h1>
    <ul className='users'>
     {users.map((user) => (
      <React.Fragment key={user.id}>
        <li><strong>Name:</strong>  {user.name} - {user.email}</li>
      </React.Fragment>
     ))}
     </ul>
    </div>
  );
}

export default UserList