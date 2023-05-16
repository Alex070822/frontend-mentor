import "./App.css";
import { TimeLeft } from "./components";
import Countdown from "./components/Countdown/Countdown";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [duration, setDuration] = useState<TimeLeft>({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prevDuration) => {
        const { days, hours, minutes, seconds } = prevDuration;

        const totalSeconds =
          days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return prevDuration;
        }

        const updatedTotalSeconds = totalSeconds - 1;

        const updatedDuration: TimeLeft = {
          days: Math.floor(updatedTotalSeconds / (24 * 60 * 60)),
          hours: Math.floor((updatedTotalSeconds % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((updatedTotalSeconds % (60 * 60)) / 60),
          seconds: updatedTotalSeconds % 60,
        };

        return updatedDuration;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <h1>We're launching soon</h1>
        <Countdown timeLeft={duration} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
