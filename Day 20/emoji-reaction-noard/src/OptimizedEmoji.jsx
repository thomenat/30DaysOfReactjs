import React from "react";

const OptimizedEmoji = React.memo(({ emoji, count, onClick }) => {
  console.log(`✅ OptimizedEmoji Rendered: ${emoji}, Count: ${count}`);

  return (
    <button onClick={() => onClick(emoji)} style={{ fontSize: "24px", margin: "5px" }}>
      {emoji} {count}
    </button>
  );
});

export default React.memo(OptimizedEmoji);
