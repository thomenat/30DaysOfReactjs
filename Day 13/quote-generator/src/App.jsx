import { useState } from 'react'
import './App.css'
import QuoteGenerator from './QuoteGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuoteGenerator/>
    </>
  )
}

export default App
