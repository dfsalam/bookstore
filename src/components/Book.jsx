import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Book.css';

export default function Book({
  title, author, itemId, category,
}) {
  return (
    <section className="book_container">
      <section className="book_main flex_col">
        <h4 className="book_category">{category}</h4>
        <h3 className="book_title">{title}</h3>
        <h5 className="blue_font book_author">{author}</h5>
        <div className="book_buttons" id={itemId}>
          <button className="book_btn blue_font comment_btn" type="button">Comments</button>
          <Button btnName="Remove" />
          <button className="book_btn blue_font edit_btn" type="button">Edit</button>
        </div>
      </section>
      <section className="book_right">
        <section style={{ display: 'flex' }}>
          <img alt="advance" src="./images/progress.png" style={{ height: '4.25rem', alignSelf: 'center' }} />
          <div className="flex_col book_middle">
            <h3 className="book_percent">
              { title === 'Dune' ? '8%' : ''}
              { title === 'The Hunger Games' ? '64%' : ''}
              { title === 'Capital in the Twenty-First Century' ? '0%' : ''}
            </h3>
            <h4 className="book_completed">Completed</h4>
          </div>
        </section>
        <section className="flex_col book_end">
          <h4 className="book_chapter">CURRENT CHAPTER</h4>
          <h4 className="book_chapter_name">
            { title === 'Dune' ? 'Chapter 3: "A Lesson Learned"' : ''}
            { title === 'The Hunger Games' ? 'Chapter 17' : ''}
            { title === 'Capital in the Twenty-First Century' ? 'Introduction' : ''}
          </h4>
          <button type="button" className="book_update_btn">UPDATE PROGRESS</button>
        </section>
      </section>
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
