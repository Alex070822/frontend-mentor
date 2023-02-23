import "./styles.scss";
import UserDashboard from "./components/UserDashboard";
import Card from "./components/Card";
import data from "./data/data";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [dailyHours, setDailyHours] = useState(false);
  const [weeklyHours, setWeeklyHours] = useState(true);
  const [monthlyHours, setMonthlyHours] = useState(false);

  const card = data.map((item) => {
    return (
      <Card
        title={item.title}
        timeframes={item.timeframes}
        key={uuidv4()}
        dailyHours={dailyHours}
        weeklyHours={weeklyHours}
        monthlyHours={monthlyHours}
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
