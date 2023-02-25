import PropTypes from 'prop-types';

export default function Book({ title, author }) {
  return (
    <li>
      Title:
      {title}
      {' '}
      Author:
      {author}
      <button type="button">Remove</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
