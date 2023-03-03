import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from '../routes/Books';
import Categories from '../routes/Categories';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import '../styles/App.css';
import { getBooksItems } from '../redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  const {
    isLoading,
  } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksItems());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Is loading .....</h3>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
