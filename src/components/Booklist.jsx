import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p className="no-books">No books available.</p>
      ) : (
        <div className="book-list">
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