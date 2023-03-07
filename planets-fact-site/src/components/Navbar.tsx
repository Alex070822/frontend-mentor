import React, { useContext } from "react";
import { planetContext } from "../App";

function Navbar() {
  const navbarIcon = require("../media/icon-hamburger.svg").default;
  const listIcon = require("../media/icon-chevron.svg").default;
  const planet = useContext(planetContext);

  return (
    <nav className="nav">
      <input type="checkbox" className="nav-checkbox" id="nav-checkbox" />
      <label htmlFor="nav-checkbox" className="nav-toggle">
        <img src={navbarIcon} alt="Navbar icon" className="nav-toggle-menu" />
      </label>
      <ul className="nav-menu">
        <li>
          <a href="">MERCURY{planet.name}</a>
          <img src={listIcon} alt="list icon" className="list-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
