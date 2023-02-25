import { Routes, Route } from 'react-router-dom';
import Books from '../routes/Books';
import Categories from '../routes/Categories';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import '../styles/App.css';

function App() {
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
