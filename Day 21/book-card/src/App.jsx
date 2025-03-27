import React from "react";
import BookCard from "./BookCard";
import "./App.css";

function App() {
  const books = [
    { title: "Atomic Habits", author: "James Clear", pages: 320, available: true },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Becoming", author: "Michelle Obama", pages: 448, available: false },
    { title: "Clean Code", author: "Robert C. Martin", pages: 464, available: true }
  ];

  return (
    <div className="app">
      <h1>📚 My Book List</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
}

export default App;
