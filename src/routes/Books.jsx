import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCntr from '../components/BookCntr';
import Form from '../components/Form';
import { getBooksItems } from '../redux/books/booksSlice';

export default function Books() {
  const {
    isLoading,
  } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h3>Is loading .....</h3>
      </div>
    );
  }
  return (
    <div>
      <BookCntr />
      <Form />
    </div>
  );
}
