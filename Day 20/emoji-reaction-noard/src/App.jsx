import React, { useState, useCallback } from "react";
import RegularEmoji from "./RegularEmoji";
import OptimizedEmoji from "./OptimizedEmoji";

const emojis = ["👍", "❤️", "😂", "🔥", "🎉"];

const App = () => {

  const [regularReactions, setRegularReactions] = useState(
    emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
  );

  const [optimizedReactions, setOptimizedReactions] = useState(
    emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
  );

  const addRegularReaction = useCallback((emoji) => {
    setRegularReactions((prevReactions) => ({
      ...prevReactions,
      [emoji]: prevReactions[emoji] + 1,
    }));
  }, []);

  
  const addOptimizedReaction = useCallback((emoji) => {
    setOptimizedReactions((prevReactions) => ({
      ...prevReactions,
      [emoji]: prevReactions[emoji] + 1,
    }));
  }, []);

  console.log("🔄 App Re-rendered!");

  return (
    <div className="container">
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎭 Emoji Reaction Board</h1>
      <p>Click an emoji to react!</p>

      <h2>❌ Regular Emoji Buttons (Unoptimized)</h2>
      {emojis.map((emoji) => (
        <RegularEmoji
          key={emoji}
          emoji={emoji}
          count={regularReactions[emoji]}
          onClick={addRegularReaction}
        />
      ))}

      <h2>✅ Optimized Emoji Buttons (React.memo)</h2>
      {emojis.map((emoji) => (
        <OptimizedEmoji
          key={emoji}
          emoji={emoji}
          count={optimizedReactions[emoji]}
          onClick={addOptimizedReaction}
        />
      ))}
    </div>
    </div>
  );
};

export default App;
