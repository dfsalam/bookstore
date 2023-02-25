import { Routes, Route } from 'react-router-dom';
import Books from '../routes/Books';
import Authors from '../routes/Authors';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import '../styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="books" element={<Books />} />
        <Route path="authors" element={<Authors />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
