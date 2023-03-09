import React from "react";

function Navbar({
  planetsNames,
  setSelectedPlanet,
}: {
  planetsNames: string[];
  setSelectedPlanet: (name: string) => void;
}) {
  const navbarIcon = require("../media/icon-hamburger.svg").default;
  const listIcon = require("../media/icon-chevron.svg").default;

  return (
    <nav className="nav">
      <input type="checkbox" className="nav-checkbox" id="nav-checkbox" />
      <label htmlFor="nav-checkbox" className="nav-toggle">
        <img src={navbarIcon} alt="Navbar icon" className="nav-toggle-menu" />
      </label>
      <ul className="nav-menu">
        {planetsNames.map((name) => (
          <li key={name}>
            <div className="nav-menu-circle"></div>
            <a onClick={() => setSelectedPlanet(name)}>{name}</a>
            <img src={listIcon} alt="list icon" className="list-icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
