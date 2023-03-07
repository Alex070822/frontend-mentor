import React from "react";
import Navbar from "./Navbar";

function Header({
  planetsNames,
  setSelectedPlanet,
}: {
  planetsNames: string[];
  setSelectedPlanet: (name: string) => void;
}) {
  return (
    <header>
      <div className="header-title">THE PLANETS</div>
      <Navbar
        planetsNames={planetsNames}
        setSelectedPlanet={setSelectedPlanet}
      />
    </header>
  );
}

export default Header;
