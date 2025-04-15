import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface JournalEntry {
  id: number;
  day: number;
  topic: string;
  summary: string;
  githubLink: string;
}

const JournalList = () => {
  const [entries, setEntries] = useState([] as JournalEntry[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('/src/data/journalEntries.json');
        setEntries(response.data.entries);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const filteredEntries = entries.filter(entry =>
    entry.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by topic or summary..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <Link
            key={entry.id}
            to={`/entry/${entry.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Day {entry.day}: {entry.topic}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{entry.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">View Details</span>
                <a
                  href={entry.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalList; 