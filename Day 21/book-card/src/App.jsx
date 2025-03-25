import React from "react";
import BookCard from "./BookCard";

function App() {
  return (
    <div>
      <h1>📚 My Book List</h1>
      <BookCard title="Atomic Habits" author="James Clear" pages={320} available={true} />
      <BookCard title="The Alchemist" author="Paulo Coelho" />
    </div>
  );
}

export default App;
