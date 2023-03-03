import PropTypes from 'prop-types';
import Button from './Button';

export default function Book({
  title, author, itemId,
}) {
  return (
    <li id={itemId}>
      Title:
      {title}
      {' '}
      Author:
      {author}
      <Button btnName="Remove" />
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
