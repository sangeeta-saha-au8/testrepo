import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className = "NavBar">
      <h3> Company Name </h3>
      <Link to="/">Home</Link>
      {/* <a href="/">Home</a> */}
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
     
    </div>
  );
};

export default NavBar;