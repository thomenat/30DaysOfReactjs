import { useState } from 'react'
import './App.css'

const emojis = ["👍", "❤️", "😂", "🔥", "🎉"];

function App() {
  const [reactions, setReactions] = useState
    ({ "👍": 0, "❤️": 0, "😂": 0, "🔥": 0, "🎉": 0});
  
  function addReaction(emoji) {
    
  }

  return (
    <>
    <div className='container'>

    </div>
    </>
  )
}

export default App
