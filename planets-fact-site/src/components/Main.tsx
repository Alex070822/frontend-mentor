import React, { FC } from "react";
import { Characteristics, Images, PlanetInfo, SummaryData } from "./index";

interface PlanetProps {
  name: string;
  overview: SummaryData;
  structure: SummaryData;
  geology: SummaryData;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  accentColor: string;
  characteristics: Characteristics;
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristics>>;
}

const Main: FC<PlanetProps> = ({
  name,
  overview,
  structure,
  geology,
  rotation,
  revolution,
  radius,
  temperature,
  images,
  accentColor,
  characteristics,
  setCharacteristics,
}) => {
  const planetImg = require("./assets/planet-mercury.svg").default;
  const sourceIcon = require("../media/icon-source.svg").default;

  const items: Array<{
    value: Characteristics;
    label: string;
  }> = [
    { value: "OVERVIEW", label: "overview" },
    { value: "STRUCTURE", label: "structure" },
    { value: "GEOLOGY", label: "geology" },
  ];

  return (
    <main>
      <div className="main-info-menu">
        {items.map(({ value, label }) => (
          <button
            key={label}
            className="main-info-menu-btn"
            onClick={() => setCharacteristics(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="planet">
        <img src={planetImg} alt={name} className="planet-img" />
      </div>
      <div className="general-info">
        <h1 className="general-info-name">{name}</h1>
        <p className="general-info-summary"></p>
        <div className="general-info-source">
          <div className="general-info-source-title">Source :&nbsp;</div>
          <a
            className="general-info-source-link"
            href=""
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

function getSummaryData(characteristics: Characteristics): keyof PlanetInfo {
  switch (characteristics) {
    case "OVERVIEW":
      return "overview";
    case "STRUCTURE":
      return "structure";
    case "GEOLOGY":
      return "geology";
  }
}

export default Main;
