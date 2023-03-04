import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Book.css';

export default function Book({
  title, author, itemId, category,
}) {
  return (
    <li>
      <section className="book_main">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <h5>{author}</h5>
        <div className="book_buttons" id={itemId}>
          <button type="button">Comments</button>
          <Button btnName="Remove" />
          <button type="button">Edit</button>
        </div>
      </section>
      <section>
        <img alt="advance" />
        <div>
          <h3>
            { title === 'Dune' ? '8%' : ''}
            { title === 'The Hunger Games' ? '64%' : ''}
            { title === 'Capital in the Twenty-First Century' ? '0%' : ''}
          </h3>
          <h4>Completed</h4>
        </div>
      </section>
      <section>
        <h4>CURRENT CHAPTER</h4>
        <h4>
          { title === 'Dune' ? 'Chapter 3: "A Lesson Learned"' : ''}
          { title === 'The Hunger Games' ? 'Chapter 17' : ''}
          { title === 'Capital in the Twenty-First Century' ? 'Introduction' : ''}
        </h4>
      </section>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string,
};

Book.defaultProps = {
  category: 'Empty',
};
