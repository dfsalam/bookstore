import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookCntr = () => {
  const {
    books,
  } = useSelector((state) => state.books);

  // Refactor the fetched object
  // const keys = Object.keys(books);
  // const newBooks = [];
  // let item = {};
  // keys.forEach((e) => {
  //   item = {
  //     item_id: e,
  //     title: books[e][0].title,
  //     author: books[e][0].author,
  //     category: books[e][0].category,
  //   };
  //   newBooks.push(item);
  // });

  return (
    <div>
      <h3>Book List</h3>
      {books.map((item) => (
        <Book
          key={item.item_id}
          title={item.title}
          author={item.author}
          itemId={item.item_id}
        />
      ))}
    </div>
  );
};

export default BookCntr;
