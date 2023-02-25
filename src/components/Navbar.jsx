import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: 'books', text: 'Books' },
    { path: 'authors', text: 'Authors' },
  ];
  return (
    <nav>
      <h1>Bookstore</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
