import { useState } from 'react'
import './App.css'
import LoginSystem from './LoginSystem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginSystem/>
    </>
  )
}

export default App
