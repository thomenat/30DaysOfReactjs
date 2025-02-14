import { useState } from "react";
import './HeartPop.css';

export default function HeartPop() {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    setHearts((prev) => [...prev, "💘"]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
        <h1>Happy Valentine's Day</h1>
      <button
        onClick={addHeart}
        className="px-4 py-2 bg-red-500 text-white text-lg rounded-lg shadow-lg hover:bg-red-600 transition"
      >
        Click Me
      </button>
      <div className="valentine-message text-3xl mt-4">{hearts}</div>
    </div>
  );
}
