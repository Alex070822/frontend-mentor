import React, { useState } from "react";

function Navbar({
  planetsNames,
  setSelectedPlanet,
}: {
  planetsNames: string[];
  setSelectedPlanet: (name: string) => void;
}) {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const navbarIcon = require("../media/icon-hamburger.svg").default;
  const listIcon = require("../media/icon-chevron.svg").default;

  function toggleNavbar() {
    setNavbarToggle((prevMode) => !prevMode);
  }

  return (
    <nav className="nav">
      <img
        src={navbarIcon}
        alt="Navbar icon"
        className={!navbarToggle ? "nav-toggle-menu" : "nav-toggle-menu-close"}
        onClick={toggleNavbar}
      />
      <ul className={navbarToggle ? "nav-menu" : "nav-menu-hidden"}>
        {planetsNames.map((name) => (
          <li key={name}>
            <div className="nav-menu-circle"></div>
            <a
              onClick={() => {
                setSelectedPlanet(name);
                toggleNavbar();
              }}
            >
              {name}
            </a>
            <img src={listIcon} alt="list icon" className="list-icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
