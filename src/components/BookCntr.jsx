import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookCntr = () => {
  const {
    books,
  } = useSelector((state) => state.books);

  return (
    <div>
      <h3>Book List</h3>
      {books.map((item) => (
        <Book
          key={item.itemId}
          title={item.title}
          author={item.author}
          itemId={item.itemId}
        />
      ))}
    </div>
  );
};

export default BookCntr;
