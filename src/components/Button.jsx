import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Button = ({ btnName }) => {
  const dispatch = useDispatch();
  let returnElement;
  const handlerRemove = (target) => {
    dispatch(removeBook(target.parentElement.id));
  };
  const handlerAdd = () => {
    const frmAddBook = document.getElementById('addBookForm');
    const titleData = frmAddBook.title.value.trim();
    const authorData = frmAddBook.author.value.trim();
    const id = uuidv4();
    const data = {
      item_id: id,
      title: titleData,
      author: authorData,
      category: 'Empty',
    };
    dispatch(addBook(data));
    frmAddBook.reset();
    frmAddBook.title.focus();
  };
  // Check status
  const { books } = useSelector((state) => state.books);

  function HandlerStatus() {
    const categories = [];
    books.forEach((e) => {
      if (!categories.includes(e)) {
        categories.push(e.category);
      }
    });
    const dataArr = new Set(categories);
    const individual = [...dataArr];
    const count = [];
    individual.forEach(() => {
      count.push(0);
    });
    individual.forEach((e, index) => {
      categories.forEach((book) => {
        if (e === book) {
          count[index] += 1;
        }
      });
    });
    const section = document.getElementById('categories');
    let inner = '';
    individual.forEach((e, i) => {
      inner += `${e}: ${count[i]} `;
    });
    section.innerHTML = inner;
  }

  if (btnName === 'Remove') {
    returnElement = (
      <button
        type="button"
        onClick={({ target }) => handlerRemove(target)}
      >
        {btnName}
      </button>
    );
  }

  if (btnName === 'Add book') {
    returnElement = (
      <button
        type="button"
        onClick={() => handlerAdd()}
      >
        {btnName}
      </button>
    );
  }

  if (btnName === 'Check status') {
    returnElement = (
      <button
        type="button"
        onClick={() => HandlerStatus()}
      >
        {btnName}
      </button>
    );
  }
  return returnElement;
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
