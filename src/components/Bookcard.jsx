import React from 'react';

const BookCard = ({ title, author, description }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '250px',
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;