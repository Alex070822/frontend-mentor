import React from "react";
import Navbar from "./Navbar";
import { SummaryType } from "./index";
import "./styles/Header.scss";

function Header({
  planetsNames,
  selectedPlanet,
  setSelectedPlanet,
  setSelectedSummaryType,
}: {
  planetsNames: string[];
  selectedPlanet: string;
  setSelectedPlanet: (name: string) => void;
  setSelectedSummaryType: React.Dispatch<React.SetStateAction<SummaryType>>;
}) {
  return (
    <header>
      <div className="header-title">THE PLANETS</div>
      <Navbar
        planetsNames={planetsNames}
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
        setSelectedSummaryType={setSelectedSummaryType}
      />
    </header>
  );
}

export default Header;
