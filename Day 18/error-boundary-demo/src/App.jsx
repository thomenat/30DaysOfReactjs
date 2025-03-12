import { useState } from 'react'
import './App.css'
import BuggyComponent from './BuggyComponent'
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ErrorBoundary>
    <BuggyComponent/>
    </ErrorBoundary>
    </>
  )
}

export default App
