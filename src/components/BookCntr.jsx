import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookCntr = () => {
  const {
    books,
  } = useSelector((state) => state.books);
  return (
    <div>
      {books.map((item) => (
        <Book
          key={item.item_id}
          title={item.title}
          author={item.author}
          itemId={item.item_id}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default BookCntr;
