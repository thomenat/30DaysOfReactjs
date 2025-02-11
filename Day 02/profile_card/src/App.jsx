import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <ProfileCard/>
      </div>
    </>
  )
}

export default App
