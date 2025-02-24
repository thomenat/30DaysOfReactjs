import React from 'react'

function UserList() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
  ];
  
  return (
    <div className='container'>
    <div>UserList</div>
    <ul className='users'>
      <>
      {users[0]}
      </>
    </ul>
    </div>
  )
}

export default UserList