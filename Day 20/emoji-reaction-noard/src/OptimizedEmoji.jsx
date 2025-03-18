import React from "react";

const OptimizedEmoji = React.memo(({ emoji, count, onClick }) => {
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
