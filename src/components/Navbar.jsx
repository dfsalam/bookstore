import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/images/user.png';

const Navbar = () => {
  const links = [
    { path: 'books', text: 'BOOKS' },
    { path: 'categories', text: 'CATEGORIES' },
  ];
  return (
    <nav>
      <ul className="nav_list">
        <h1 className="nav_title">Bookstore CMS</h1>
        {links.map((link) => (
          <li key={link.text} className="nav_list_list">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <img className="nav_img" src="./images/user.png" alt="User" />
    </nav>
  );
};
export default Navbar;
