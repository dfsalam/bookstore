import Button from './Button';
import '../styles/Form.css';

export default function Form() {
  return (
    <div className="mrg_l form_container">
      <h2 className="form_subject">ADD NEW BOOK</h2>
      <form id="addBookForm" className="form_subcontainer">
        <input type="text" name="title" placeholder="Book title" required className="form_title" />
        <input type="text" name="author" placeholder="Author" required className="hide" />
        <select name="category" className="form_select" defaultValue="Category">
          <option value="Economy">Economy</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <Button btnName="Add book" />
      </form>
    </div>
  );
}
