import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/JournalList.css';

const JournalList = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('/src/data/journalEntries.json');
        setEntries(response.data.entries);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const filteredEntries = entries.filter(entry =>
    entry.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="journal-container">
      <div className="journal-content">
        <h1 className="journal-title">My React Journey</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by topic or summary..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="entries-list">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className={`entry-card ${expandedId === entry.id ? 'expanded' : ''}`}
            >
              <div
                className="entry-content"
                onClick={() => toggleExpand(entry.id)}
              >
                <div className="entry-header">
                  <div className="entry-title-container">
                    <span className="entry-day-badge">
                      {entry.day}
                    </span>
                    <h2 className="entry-title">
                      {entry.topic}
                    </h2>
                  </div>
                  <div className="entry-actions">
                   
                    <a
                      href={entry.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                {expandedId === entry.id && (
                  <div className="entry-summary">
                    <p>{entry.summary}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalList; 