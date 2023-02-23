import "./styles.scss";
import { useState } from "react";
import UserDashboard from "./components/UserDashboard";
import Card from "./components/Card";
import MapActivity from "./components/MapActivity";
import data from "./data/data";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [dailyHours, setDailyHours] = useState(false);
  const [weeklyHours, setWeeklyHours] = useState(true);
  const [monthlyHours, setMonthlyHours] = useState(false);

  const activities = data.map(MapActivity);
  const card = activities.map((activity) => {
    return (
      <Card
        title={activity.title}
        timeframes={activity.timeframes}
        key={uuidv4()}
        dailyHours={dailyHours}
        weeklyHours={weeklyHours}
        monthlyHours={monthlyHours}
        bgColor={activity.bgColor}
        bgImg={activity.bgImg}
      />
    );
  });

  return (
    <div className="App">
      <main>
        <UserDashboard
          dailyHours={dailyHours}
          setDailyHours={setDailyHours}
          weeklyHours={weeklyHours}
          setWeeklyHours={setWeeklyHours}
          monthlyHours={monthlyHours}
          setMonthlyHours={setMonthlyHours}
        />
        <div className="card-container">{card}</div>
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
