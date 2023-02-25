import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: 'books', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <nav>
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
