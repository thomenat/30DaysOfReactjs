import React from 'react';
import PropTypes from 'prop-types';

function BookCard({ title, author, pages, available }) {
  return (
    <div className='container'>
        <h2>BookCard</h2>
        <p>Title: {title}</p>
        <p>Author: { author} </p>
        <p>Pages: {pages} </p>
        <p>Status: {available ? "Available" : "Not available"} </p>
    </div>
  )
}

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number,
    available: PropTypes.bool
};

BookCard.defaultProps = {
    pages: 100,
    available: false
}

export default BookCard;
