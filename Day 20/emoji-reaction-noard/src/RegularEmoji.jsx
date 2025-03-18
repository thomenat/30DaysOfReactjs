import React from "react";

const RegularEmoji = ({ emoji, count, onClick }) => {
  console.log(`❌ RegularEmoji Rendered: ${emoji}`);

  return (
    <button onClick={() => onClick(emoji)} style={{ fontSize: "24px", margin: "5px" }}>
      {emoji} {count}
    </button>
  );
};

export default RegularEmoji;
