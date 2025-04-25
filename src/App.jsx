import React, { useState, useEffect } from 'react';
import BookList from '../src/components/Booklist';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookData = [
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A journey of self-discovery following a young shepherd.',
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A classic romance novel exploring love and social class.',
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'An adventure of a hobbit in a fantastical world.',
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