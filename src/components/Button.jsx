import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
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
      itemId: id,
      title: titleData,
      author: authorData,
      category: 'Empty',
    };
    dispatch(addBook(data));
    frmAddBook.reset();
    frmAddBook.title.focus();
  };

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
  return returnElement;
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
