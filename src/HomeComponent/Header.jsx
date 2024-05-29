import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { Button } from "@mui/material";
// import "./Header.css"
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <div 
          // to="/" 
          className={linkClassName} onClick={closeMobileMenu}>
            Home
          </div>
        </li>
        <li>
          <div
            // to="/news"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            News
          </div>
        </li>
        <li>
          <div
            // to="/about-us"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Us
          </div>
        </li>
        <li>
          <div
            // to="/favorite"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Favorite
          </div>
        </li>
        <li>
          <div
            // to="/location"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Location
          </div>
        </li>
        <li>
          <div
            // to="/get-started"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </div>
        </li>
      </ul>
    );
  };
  const menus = [
    { name: "HOME", id: 1 },
    { name: "PAGES", id: 2 },
    { name: "JOB LISTING", id: 3 },
    { name: "EXPLORE", id: 4 },
    { name: "ELEMENTS", id: 5 },
    { name: "BLOG", id: 6 },
  ];
  return (
    // <div className="flex gap-6 justify-between bg-gray-800 h-20 items-center p-5">
    //   <div >
    //     <img src={"src/assets/logos/logo-white.png"} style={{width:"200px",height:"50px"}}/>
    //   </div>
    //   <div className="flex gap-10 items-center">
    //   <div className="flex gap-8">
    //     {menus.map((m) => {
    //       return <div className="text-sm font-bold text-orange-50 hover:text-orange-400" >{m.name}</div>;
    //     })}
    //   </div>
    //   <div className="flex gap-10 items-center">
    //     <SearchIcon className="text-orange-50 hover:text-orange-400" style={{width:"40px",height:'40px'}}/>
    //     <Button variant="contained"  className="text-orange-50text-2xl font-bold" style={{background:"rgb(255 142 0)",fontSize:"22px",fontWeight:"600",textTransform:"none"}}>Post a Job</Button>
    //   </div>
    //   </div>
    // </div>
    <header className="header">
    <nav className="nav container">
      <div className="nav__logo">
      {/* <NavLink to="/" > */}
        Navigation Bar
      {/* </NavLink> */}
      </div>

      {isMobile && (
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      )}

      {isMenuOpen ? (
        <div
          className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          {renderNavLinks()}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
      ) : (
        renderNavLinks()
      )}
    </nav>
  </header>
  );
}

export default Header;
