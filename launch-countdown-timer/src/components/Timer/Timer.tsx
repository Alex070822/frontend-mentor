import { useEffect, useState } from "react";
import { TimeLeft } from "../index";
import Countdown from "../Countdown/Countdown";

function Timer() {
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

  return <Countdown timeLeft={duration} />;
}

export default Timer;
