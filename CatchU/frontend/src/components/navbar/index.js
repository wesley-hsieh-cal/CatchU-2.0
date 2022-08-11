import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a className="home" href="/">
        Home
      </a>
      <input type="text" placeholder="Search..."></input>
      <a href="#about">Register/Signin</a>
    </div>
  );
};

export default Navbar;
