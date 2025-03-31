import { useState } from 'react'
import './App.css'
import EmojiSearch from './EmojiSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiSearch />
    </>
  )
}

export default App
