import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="navbar">
      <button onClick={toggleHandler}>{navbarOpen ? <MdClose className="closeLogo"/> : <FiMenu className="menuLogo"/>}</button>
      <ul className={`menuNavbar ${navbarOpen ? "showMenu" : ""}`}>
        <li><Link to="/" className="listMenu">HOME</Link></li>
        <li><Link to="/about/about-app" className="listMenu">ABOUT</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;