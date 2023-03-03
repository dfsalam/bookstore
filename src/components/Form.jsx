import Button from './Button';

export default function Form() {
  return (
    <form id="addBookForm">
      <input type="text" name="title" placeholder="Book title" required />
      <input type="text" name="author" placeholder="Author" required />
      <Button btnName="Add book" />
    </form>
  );
}
