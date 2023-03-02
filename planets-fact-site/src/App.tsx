import React from "react";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { mapActivity } from "./components";
import data from "./data/data";

function App() {
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
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <>{planets}</>
      <Footer />
    </div>
  );
}

export default App;
