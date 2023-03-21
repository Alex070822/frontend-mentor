import React, { useEffect, useState } from "react";
import { SummaryType } from "../index";
import { css, cx } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { colors } from "../theme/theme";

const navCss = css`
  margin: 0 0 0 auto;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    display: flex;
    width: auto;
    height: auto;
    margin: 0;
  }

  @media (min-width: ${widthBreakpoint.web}px) {
    margin: 0 40px 0 auto;
  }
`;
const navToggleMenuCss = css`
  cursor: pointer;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    display: none;
  }
`;
const navToggleMenuCloseCss = css`
  opacity: 0.25;
  cursor: pointer;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    display: none;
  }
`;
const navMenuCss = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 69px;
  left: 0;
  width: 100vw;
  padding: 24px 0 100% 0;
  background: rgb(7, 7, 36);

  @media (min-width: ${widthBreakpoint.mobile}px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 4.296875%;
    justify-content: center;
    background: transparent;
    padding: 5.078125% 5.078125% 3.515625% 5.078125%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (min-width: ${widthBreakpoint.web}px) {
    position: relative;
    justify-content: flex-end;
    height: 86px;
    width: 750px;
    column-gap: 33px;
    top: auto;
    left: auto;
    padding: 0;
    border: 0;
  }
`;
const navMenuHiddenCss = css`
  display: none;
`;
const navMenuListItemCss = css`
  display: flex;
  list-style: none;
  align-items: center;
  background: rgb(7, 7, 36);
  height: 66px;
  padding: 20px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: ${widthBreakpoint.mobile}px) {
    background: transparent;
    height: auto;
    border-bottom: none;
    padding: 0;
  }
`;
const navMenuListItemSelectedCss = css`
  @media (min-width: ${widthBreakpoint.web}px) {
    border-top: 4px solid red;
    border-bottom: 4px solid transparent;
  }
`;
const navMenuCircleCss = css`
  background: #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-right: 24px;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    display: none;
  }
`;
const navMenuItemCss = css`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 19px;
  text-transform: uppercase;
  letter-spacing: 1.36364px;
  cursor: pointer;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    color: rgba(255, 255, 255, 0.4980392157);
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 25px;
    &:hover {
      color: #ffffff;
    }
  }
`;
const navMenuItemSelectedCss = css`
  @media (min-width: ${widthBreakpoint.web}px) {
    color: #ffffff;
  }
`;
const listIconCss = css`
  aspect-ratio: 1/2;
  height: 8px;
  margin: 0 0 0 auto;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    display: none;
  }
`;

function Navbar({
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
  const [navbarToggle, setNavbarToggle] = useState(false);

  const navbarIcon = require("../../assets/icon-hamburger.svg").default;
  const listIcon = require("../../assets/icon-chevron.svg").default;

  useEffect(() => {
    if (window.innerWidth > 375) setNavbarToggle(true);
  }, [setNavbarToggle]);

  function toggleNavbar() {
    if (window.innerWidth < 376) {
      setNavbarToggle((prevMode) => !prevMode);
    }
  }

  return (
    <nav className={navCss}>
      <img
        src={navbarIcon}
        alt="Navbar icon"
        className={!navbarToggle ? navToggleMenuCss : navToggleMenuCloseCss}
        onClick={toggleNavbar}
      />
      <ul className={navbarToggle ? navMenuCss : navMenuHiddenCss}>
        {planetsNames.map((name) => (
          <li
            className={
              selectedPlanet === name
                ? cx(navMenuListItemCss, navMenuListItemSelectedCss)
                : navMenuListItemCss
            }
            key={name}
          >
            <div className={navMenuCircleCss}></div>
            <button
              className={
                selectedPlanet === name
                  ? cx(navMenuItemCss, navMenuItemSelectedCss)
                  : navMenuItemCss
              }
              onClick={() => {
                setSelectedPlanet(name);
                toggleNavbar();
                setSelectedSummaryType("overview");
              }}
            >
              {name}
            </button>
            <img src={listIcon} alt="list icon" className={listIconCss} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
