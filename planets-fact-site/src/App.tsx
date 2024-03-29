import React, { useState } from "react";
import "./styles.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
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
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
        setSelectedSummaryType={setSelectedSummaryType}
      />
      {planet && (
        <Body
          planet={planet}
          selectedSummaryType={selectedSummaryType}
          setSelectedSummaryType={setSelectedSummaryType}
        />
      )}
      {planet && <Footer planet={planet} />}
    </div>
  );
}

export default App;
