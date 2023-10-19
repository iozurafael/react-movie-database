import { Link } from 'react-router-dom';
function Logo() {
  return (
    <li className="navbar-link logo">
      <Link to={'/'}>MovieDB</Link>
    </li>
  );
}

export default Logo;
