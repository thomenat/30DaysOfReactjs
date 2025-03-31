import React, { useState } from 'react'

function EmojiSearch() {
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

  return (
    <div className='container'>
        <h1>Emoji Search</h1>
        <input type="text" placeholder='Search for an emoji' />
        <div className="emoji-container">
  
        </div>
    </div>
  )
}

export default EmojiSearch