import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const JournalEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get('/src/data/journalEntries.json');
        const foundEntry = response.data.entries.find(
          (entry) => entry.id === Number(id)
        );
        setEntry(foundEntry || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching journal entry:', error);
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Entry not found</h2>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Back to Journal List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Day {entry.day}: {entry.topic}
          </h1>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Back to List
          </Link>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg mb-6">{entry.summary}</p>
        </div>

        <div className="mt-8">
          <a
            href={entry.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry; 