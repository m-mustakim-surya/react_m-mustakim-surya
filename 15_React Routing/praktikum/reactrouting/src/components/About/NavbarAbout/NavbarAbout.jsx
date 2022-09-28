import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarAbout.css";

const NavbarAbout = () => {
  const [appIsActive, setAppIsActive] = useState(false);
  const handleClickApp = () => {
    setAppIsActive(current => !current);
  };
  const [authorIsActive, setAuthorIsActive] = useState(false);
  const handleClickAuthor = () => {
    setAuthorIsActive(current => !current);
  };

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
            className="listMenuAbout"
            style={{color: appIsActive ? 'black' : ''}}
            onClick={handleClickApp}>
              About App
          </Link>
        </li>
        <li>
          <Link
            to="/about/about-author"
            className="listMenuAbout"
            style={{color: authorIsActive ? 'black' : ''}}
            onClick={handleClickAuthor}>
              About Author
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAbout;