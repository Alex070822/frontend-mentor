import React from "react";

function Navbar() {
  const navbarIcon = require("../media/icon-hamburger.svg").default;

  return (
    <nav className="nav">
      <input type="checkbox" className="nav-checkbox" id="nav-checkbox" />
      <label htmlFor="nav-checkbox" className="nav-toggle">
        <img src={navbarIcon} alt="Navbar icon" className="nav-toggle-menu" />
        <img src={navbarIcon} alt="Navbar icon" className="nav-toggle-close" />
      </label>
      <ul className="nav-menu">
        <li>
          <a href="">a</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
