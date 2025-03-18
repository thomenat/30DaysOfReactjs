import React from "react";

const OptimizedEmoji = React.memo(({ emoji, count, onClick }) => {
    console.log(`✅ OptimizedEmoji Rendered: ${emoji}, Count: ${count}`)
    
  return (
    <button
      onClick={() => onClick(emoji)}
      className="emoji-button optimized-emoji"
    >
      {emoji} {count}
    </button>
  );
});

export default OptimizedEmoji;
