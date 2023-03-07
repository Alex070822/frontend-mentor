import React, { useState } from "react";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { mapPlanet } from "./components";
import data from "./data/data";
import { Characteristics } from "./components";

export const planetContext = React.createContext([]);

function App() {
  const [selectedTab, setSelectedTab] = useState<Characteristics>("OVERVIEW");

  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

  const planetsNames = data.map((planet) => planet.name);

  const planetRaw = data.find((planet) => {
    return planet.name === selectedPlanet;
  });

  const planet = mapPlanet(planetRaw);

  return (
    <div className="App">
      <Header
        planetsNames={planetsNames}
        setSelectedPlanet={setSelectedPlanet}
      />
      {planet && (
        <Main
          name={planet.name}
          overview={planet.overview}
          structure={planet.structure}
          geology={planet.geology}
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temperature={planet.temperature}
          images={planet.images}
          accentColor={planet.accentColor}
          characteristics={selectedTab}
          setCharacteristics={setSelectedTab}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
