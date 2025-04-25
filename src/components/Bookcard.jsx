import React from 'react';

const BookCard = ({ title, author, description }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;