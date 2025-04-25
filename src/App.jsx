import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate fetching books (e.g., from an API)
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

    // Simulate a delay (like an API call)
    setTimeout(() => {
      setBooks(bookData);
    }, 1000);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;