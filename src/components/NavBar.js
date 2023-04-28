import React from "react";
import './NavBar.css';


const Navbar = ({ onSort }) => {
  
  return (
    <>
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          My Assignment
        </a>
      </div>

      <div className="navbar-end">
      <a className="navbar-item hire-me" href="https://www.linkedin.com/in/krishnavamsifsd/" target="_blank" rel="noopener noreferrer">Hire Me</a>

      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
