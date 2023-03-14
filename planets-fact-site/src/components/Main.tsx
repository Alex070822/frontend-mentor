import React, { FC } from "react";
import { SummaryType, Planet } from "./index";
import "./styles/Main.scss";

interface PlanetProps {
  planet: Planet;
  selectedSummaryType: SummaryType;
  setSelectedSummaryType: React.Dispatch<React.SetStateAction<SummaryType>>;
}

const Main: FC<PlanetProps> = ({
  planet: {
    name,
    rotation,
    revolution,
    radius,
    temperature,
    images,
    accentColor,
    summary: { content, source },
  },
  selectedSummaryType,
  setSelectedSummaryType,
}: PlanetProps) => {
  const planetImg = require("./assets/planet-mercury.svg").default;
  const sourceIcon = require("../media/icon-source.svg").default;

  const tabs: Array<{
    value: SummaryType;
    label: string;
  }> = [
    { value: "overview", label: "Overview" },
    { value: "structure", label: "Structure" },
    { value: "geology", label: "Surface" },
  ];

  return (
    <main>
      <div className="main-info-menu">
        <ol className="main-info-menu-items">
          {tabs.map(({ value, label }) => (
            <li key={value}>
              <button
                className={
                  selectedSummaryType === value
                    ? "main-info-menu-btn-selected main-info-menu-btn"
                    : "main-info-menu-btn"
                }
                style={{ borderBottomColor: accentColor }}
                onClick={() => setSelectedSummaryType(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="planet">
        <img src={planetImg} alt={name} className="planet-img" />
      </div>
      <div className="general-info">
        <h1 className="general-info-name">{name}</h1>
        <p className="general-info-summary">{content}</p>
        <div className="general-info-source">
          <div className="general-info-source-title">Source :&nbsp;</div>
          <a
            className="general-info-source-link"
            href={source}
            target="_blank"
            rel="noreferrer noopener"
          >
            Wikipedia
          </a>
          <img
            src={sourceIcon}
            alt="source icon"
            className="general-info-source-icon"
          />
        </div>
      </div>
      <div className="details">
        <div className="details-item">
          <div className="details-item-title">Rotation Time</div>
          <div className="details-item-data">{rotation}</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Revolution Time</div>
          <div className="details-item-data">{revolution}</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Radius</div>
          <div className="details-item-data">{radius}</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Average Temp.</div>
          <div className="details-item-data">{temperature}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
