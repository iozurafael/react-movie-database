import CustomLink from '../utils/CustomLink';
import Logo from './Logo';

function Navbar() {
  const navbarLinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Favorites', link: '/favorites' },
  ];
  const renderLinks = navbarLinks.map((link) => {
    return (
      <li key={link.id} className="navbar-link">
        <CustomLink to={link.link}>{link.name.toUpperCase()} </CustomLink>
      </li>
    );
  });
  return (
    <nav className="navbar">
      <ul>
        <Logo />
        {renderLinks}
      </ul>
    </nav>
  );
}

export default Navbar;
