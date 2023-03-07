import React, { useState } from "react";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { mapActivity } from "./components";
import data from "./data/data";
import { Characteristics } from "./components";

export const planetContext = React.createContext();

function App() {
  const [characteristics, setCharacteristics] =
    useState<Characteristics>("OVERVIEW");

  const planets = data.map(mapActivity).map((activity) => {
    return (
      <Main
        name={activity.name}
        overview={activity.overview}
        structure={activity.structure}
        geology={activity.geology}
        rotation={activity.rotation}
        revolution={activity.revolution}
        radius={activity.radius}
        temperature={activity.temperature}
        images={activity.images}
        accentColor={activity.accentColor}
        key={activity.name}
        characteristics={characteristics}
        setCharacteristics={setCharacteristics}
      />
    );
  });

  return (
    <planetContext.Provider value={planets}>
      <div className="App">
        <Header />
        <>{planets[0]}</>
        <Footer />
      </div>
    </planetContext.Provider>
  );
}

export default App;
