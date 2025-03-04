import { useState } from 'react'
import './App.css'
import ListExample from './ListExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListExample/>
    </>
  )
}

export default App
