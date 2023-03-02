import React, { FC } from "react";
import { Images, SummaryData } from "./index";

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
}) => {
  const planetImg = require("./assets/planet-mercury.svg").default;
  const sourceIcon = require("../media/icon-source.svg").default;

  return (
    <main>
      <div className="main-info-menu">
        <button className="main-info-menu-btn">Overview</button>
        <button className="main-info-menu-btn">Structure</button>
        <button className="main-info-menu-btn">Surface</button>
      </div>
      <div className="planet">
        <img src={planetImg} alt={name} className="planet-img" />
      </div>
      <div className="general-info">
        <h1 className="general-info-name">{name}</h1>
        <p className="general-info-summary">{overview.content}</p>
        <div className="general-info-source">
          <div className="general-info-source-title">Source :&nbsp;</div>
          <a
            className="general-info-source-link"
            href={overview.source}
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
