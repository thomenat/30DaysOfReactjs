import { useState } from 'react'
import './App.css'
import EditProfile from './EditProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EditProfile/>
    </>
  )
}

export default App
