import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import './components/styles.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchUsers = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock data
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        ];
        
        setUsers(mockUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <h1>User List Demo</h1>
      <UserList users={users} isLoading={isLoading} />
    </div>
  );
}

export default App;
