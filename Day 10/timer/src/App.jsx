import { useState } from 'react'
import './App.css'
import ExerciseTimer from './ExerciseTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExerciseTimer />
    </>
  )
}

export default App
