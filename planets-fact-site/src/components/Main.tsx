import React from "react";

function Main() {
  const planetImg = require("../media/planet-mercury.svg").default;
  const sourceIcon = require("../media/icon-source.svg").default;

  return (
    <main>
      <div className="main-info-menu">
        <button className="main-info-menu-btn">Overview</button>
        <button className="main-info-menu-btn-mobile">Overview</button>
        <button className="main-info-menu-btn">Internal Structure</button>
        <button className="main-info-menu-btn-mobile">Structure</button>
        <button className="main-info-menu-btn">Surface Geology</button>
        <button className="main-info-menu-btn-mobile">Surface</button>
      </div>
      <div className="planet-img-container">
        <img src={planetImg} alt="planet" className="planet-img" />
      </div>
      <div className="planet-info-container">
        <h1 className="planet-name">Mercury</h1>
        <p className="planet-info">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="planet-info-source-group">
          <div className="source-title">Source :&nbsp;</div>
          <a
            className="source-link"
            href="https://en.wikipedia.org/wiki/Mercury_(planet)"
            target="_blank"
            rel="noreferrer noopener"
          >
            Wikipedia
          </a>
          <img src={sourceIcon} alt="source icon" className="source-icon" />
        </div>
      </div>
      <div className="planet-details-group">
        <div className="planet-details">
          <div className="data-title">Rotation Time</div>
          <div className="data">58.6 Days</div>
        </div>
        <div className="planet-details">
          <div className="data-title">Revolution Time</div>
          <div className="data">87.97 Days</div>
        </div>
        <div className="planet-details">
          <div className="data-title">Radius</div>
          <div className="data">2,439.7 KM</div>
        </div>
        <div className="planet-details">
          <div className="data-title">Average Temp.</div>
          <div className="data">430°c</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
