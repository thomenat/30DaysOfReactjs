import { useState } from 'react'
import './App.css'
import EventRegistration from './EventRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventRegistration/>
    </>
  )
}

export default App
