import React from "react";

const RegularEmoji = ({ emoji, count, onClick }) => {
    console.log(`❌ RegularEmoji Rendered: ${emoji}, Count: ${count}`);

  return (
    <button
      onClick={() => onClick(emoji)}
      className="emoji-button regular-emoji"
    >
      {emoji} {count}
    </button>
  );
};

export default RegularEmoji;
