import React from "react";
import Navbar from "./Navbar";
import { SummaryType } from "./index";

function Header({
  planetsNames,
  setSelectedPlanet,
  setSelectedSummaryType,
}: {
  planetsNames: string[];
  setSelectedPlanet: (name: string) => void;
  setSelectedSummaryType: React.Dispatch<React.SetStateAction<SummaryType>>;
}) {
  return (
    <header>
      <div className="header-title">THE PLANETS</div>
      <Navbar
        planetsNames={planetsNames}
        setSelectedPlanet={setSelectedPlanet}
        setSelectedSummaryType={setSelectedSummaryType}
      />
    </header>
  );
}

export default Header;
