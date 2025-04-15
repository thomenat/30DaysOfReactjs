import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JournalList from './components/JournalList';
import JournalEntry from './components/JournalEntry';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<JournalList />} />
            <Route path="/entry/:id" element={<JournalEntry />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 