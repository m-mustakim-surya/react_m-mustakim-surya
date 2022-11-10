import { Link } from "react-router-dom";
import "./NavbarAbout.css";

const NavbarAbout = () => {
  return (
    <nav className="navbarAbout">
      <ul className="menuAbout">
        <li>
          <Link to="/" className="listMenuAbout">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about/about-app"
            className="listMenuAbout">
              About App
          </Link>
        </li>
        <li>
          <Link
            to="/about/about-author"
            className="listMenuAbout">
              About Author
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAbout;