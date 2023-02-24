import React from "react";

function Header() {
  const headerMenuImg = require("../media/icon-hamburger.svg").default;

  return (
    <header>
      <div className="header-title">THE PLANETS</div>
      <img src={headerMenuImg} alt="header menu" className="header-menu-img" />
    </header>
  );
}

export default Header;
