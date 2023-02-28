import React, { FC } from "react";

interface NavbarProps {
  displayNavbar: boolean;
}

const Navbar: FC<NavbarProps> = ({ displayNavbar }) => {
  return (
    <nav>
      <div className={!displayNavbar ? "hide-navbar" : "mobile-navbar"}>
        <button className="mobile-navbar-btn">MERCURY</button>
      </div>
    </nav>
  );
};

export default Navbar;
