import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Button = ({ btnName }) => {
  const dispatch = useDispatch();
  const handler = (target) => {
    dispatch(removeBook(target.parentElement.id));
  };
  return (
    <button
      type={btnName === 'Add book' ? 'button' : 'submit'}
      onClick={({ target }) => handler(target)}
    >
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
