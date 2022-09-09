import React from "react";
import './styles.css';

const Navbar = () => {
  return (
    <header>
      {/* <img className="logo" src="./logo.svg" /> */}
      <nav>
        <ul className="nav__links">
          <li>
            <a href="/">CatchU</a>
          </li>
          <li>
            <a href="/">Register/Login</a>
          </li>
        </ul>
      </nav>
    </header>




    // <nav className="navbar-container">
    //   <a className="home" href="/">
    //     Home
    //   </a>
    //   <input type="text" placeholder="Search..."></input>
    //   <a href="#about">Register/Login</a>
    // </nav>
  );
};

export default Navbar;
