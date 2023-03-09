import React, { useState } from "react";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { mapPlanet, SummaryType } from "./components";
import data from "./data/data";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

  const [selectedSummaryType, setSelectedSummaryType] =
    useState<SummaryType>("overview");

  const planetRaw = data.find((planet) => {
    return planet.name === selectedPlanet;
  });

  const planet = mapPlanet(selectedSummaryType, planetRaw);

  return (
    <div className="App">
      <Header
        planetsNames={data.map((planet) => planet.name)}
        setSelectedPlanet={setSelectedPlanet}
      />
      {planet && (
        <Main
          planet={planet}
          selectedSummaryType={selectedSummaryType}
          setSelectedSummaryType={setSelectedSummaryType}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
