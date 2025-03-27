import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

function BookCard({ title, author, pages, available }) {
  return (
    <div className='book-card'>
        <p className='book-title'>Title: {title}</p>
        <div className='book-detail'>
        <p> <strong>Author: </strong>{ author} </p>
        <p> <strong>Pages:</strong> {pages} </p>
        <p><strong>Status:</strong> {available ? "Available" : "Not available"} </p>
        </div>
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
