import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Layout.css';

const Layout = () => (
  <div className="layout_main">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
