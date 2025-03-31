import React, { useState } from 'react'

function EmojiSearch() {
    const [search, setSearch] = useState('')
    const EmojiArray = [
        {
            name: 'Smile',
            symbol: '😊',
        },
        {
            name: 'Laugh',
            symbol: '😂',
        },
        {
            name: 'Heart',
            symbol: '💖',
        },
        {
            name: 'Star',
            symbol: '⭐',
        },
        {
            name: 'Car',
            symbol: '🚗',
        }
    ]

    const filteredEmojis = EmojiArray.filter((emoji) => emoji.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='container'>
        <h1>Emoji Search</h1>
        <input 
        type="text" 
        placeholder='Search for an emoji'  
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="emoji-container">
            {filteredEmojis.map((emoji) => (
                <div key={emoji.name}>
                    {emoji.symbol} {emoji.name}
                
                </div>

            ))}
        </ul>
    </div>
  )
}

export default EmojiSearch