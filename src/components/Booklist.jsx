import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
  };

  return (
    <div>
      {books.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No books available.</p>
      ) : (
        <div style={listStyle}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              description={book.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;