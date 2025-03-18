import React from "react";

const RegularEmoji = ({ emoji, count, onClick }) => {
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
