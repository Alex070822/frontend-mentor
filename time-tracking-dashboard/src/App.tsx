import "./styles.scss";
import { useState } from "react";
import UserDashboard from "./components/UserDashboard";
import Card from "./components/Card";
import { mapActivity, Period } from "./components";
import data from "./data/data";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [period, setPeriod] = useState<Period>("WEEKLY");

  const cards = data.map(mapActivity).map((activity) => {
    return (
      <Card
        title={activity.title}
        timeframes={activity.timeframes}
        key={uuidv4()}
        period={period}
        bgColor={activity.bgColor}
        bgImg={activity.bgImg}
      />
    );
  });

  return (
    <div className="App">
      <main>
        <UserDashboard period={period} setPeriod={setPeriod} />
        <div className="card-container">{cards}</div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
            target="_blank"
            rel="noreferrer noopener"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/alexis-glez-h"
            target="_blank"
            rel="noreferrer noopener"
          >
            Alexis González
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
