import { useState } from 'react'
import './App.css'
import UserList from './UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserList/>
    </>
  )
}

export default App
