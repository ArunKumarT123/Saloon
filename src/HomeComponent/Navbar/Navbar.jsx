import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <div
        //  to="/" 
        className="nav__logo">
          Navigation Bar
        </div>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <div
              //  to="/" 
               className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </div>
            </li>
            <li className="nav__item">
              <div
                // to="/news"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                News
              </div>
            </li>
            <li className="nav__item">
              <div
                // to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </div>
            </li>
            <li className="nav__item">
              <div
                // to="/favorite"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Favorite
              </div>
            </li>
            <li className="nav__item">
              <div
                // to="/location"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Location
              </div>
            </li>
            <li className="nav__item">
              <div 
              // to="/get-started"
               className="nav__link nav__cta">
                Post a Job
              </div>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
