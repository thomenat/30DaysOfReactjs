import { useState } from 'react'
import './App.css'
import HeartPop from './assets/HeartPop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <HeartPop/>
    </>
  )
}

export default App
