import React, { useState, useEffect } from 'react';
import BookList from './components/BookList'; // Corrected the import (uppercase "L")
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookData = [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A story about racial injustice and the loss of innocence in a small Southern town.',
      },
      {
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel about totalitarian surveillance and control.',
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A tale of wealth, ambition, and unrequited love in the Roaring Twenties.',
      },
    ];

    setTimeout(() => {
      setBooks(bookData);
    }, 1000);
  }, []);

  return (
    <div className="book-app">
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;