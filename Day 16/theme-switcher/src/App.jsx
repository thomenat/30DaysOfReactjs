import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher App</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
