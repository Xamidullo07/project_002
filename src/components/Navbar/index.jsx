import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span className="icon">{"</>"}</span> DevConnector
        </div>
        <ul className="navLinks">
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">
              <span className="icon">👤</span> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">↪️</span> Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
