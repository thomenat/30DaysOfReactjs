import { useState } from 'react'
import './App.css'
import WeatherApp from './WeatherApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <WeatherApp />
    </div>
  )
}

export default App
