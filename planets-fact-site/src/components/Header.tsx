import React, { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [displayNavbar, setDisplayNavbar] = useState(false);

  function toggleNavbar() {
    setDisplayNavbar((prevMode) => !prevMode);
  }

  return (
    <header>
      <div className="header-title">THE PLANETS</div>
      <button className="header-menu-btn" onClick={toggleNavbar}></button>
      <Navbar displayNavbar={displayNavbar} />
    </header>
  );
}

export default Header;
