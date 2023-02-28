import React from "react";

function Main() {
  const planetImg = require("../media/planet-mercury.svg").default;
  const sourceIcon = require("../media/icon-source.svg").default;

  return (
    <main>
      <div className="main-info-menu">
        <button className="main-info-menu-btn">Overview</button>
        <button className="main-info-menu-btn">Structure</button>
        <button className="main-info-menu-btn">Surface</button>
      </div>
      <div className="planet">
        <img src={planetImg} alt="planet" className="planet-img" />
      </div>
      <div className="general-info">
        <h1 className="general-info-name">Mercury</h1>
        <p className="general-info-summary">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="general-info-source">
          <div className="general-info-source-title">Source :&nbsp;</div>
          <a
            className="general-info-source-link"
            href="https://en.wikipedia.org/wiki/Mercury_(planet)"
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
          <div className="details-item-data">58.6 Days</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Revolution Time</div>
          <div className="details-item-data">87.97 Days</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Radius</div>
          <div className="details-item-data">2,439.7 KM</div>
        </div>
        <div className="details-item">
          <div className="details-item-title">Average Temp.</div>
          <div className="details-item-data">430°c</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
