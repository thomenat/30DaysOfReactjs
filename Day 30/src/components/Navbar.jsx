import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          30 Days of React Journal
        </Link>
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 