import "./countdown.css";
import { FC } from "react";
import { TimeLeft } from "../index";

interface CountdownProps {
  timeLeft: TimeLeft;
}

const Countdown: FC<CountdownProps> = ({
  timeLeft: { days, hours, minutes, seconds },
}: CountdownProps) => {
  const counters = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className="counter-container">
      {counters.map(({ label, value }) => (
        <div className="counter" key={label}>
          <div className="card-background">
            <div className="card">
              <div className="left-card-hole"></div>
              <div className="right-card-hole"></div>
              <div className="top-transparency"></div>
              <div className="card-top">{value}</div>
              <div className="divider"></div>
              <div className="card-bottom">{value}</div>
            </div>
          </div>
          <div className="time">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
