import React from "react";
import Navbar from "../Navbar/Navbar";
import { SummaryType } from "../index";
import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";

const headerCss = css`
  display: flex;
  align-items: center;
  height: 68px;
  padding: 0 24px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    flex-direction: column;
    height: 160px;
    padding: 0 0;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    height: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
const titleCss = css`
  font-weight: 400;
  font-size: 28px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    padding-top: 32px;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    letter-spacing: -1.05px;
    width: 109px;
    margin: 22px 0 0 2.22222222%;
    padding: 0;
  }
`;

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
    <header className={headerCss}>
      <div className={titleCss}>THE PLANETS</div>
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
