import "./countdown.css";
import { FC } from "react";
import { TimeLeft } from "../../App";

interface CountdownProps {
  timeLeft: TimeLeft;
}

const Countdown: FC<CountdownProps> = ({
  timeLeft: { days, hours, minutes, seconds },
}: CountdownProps) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <div className="card-background">
          <div className="card">
            <div className="left-card-hole"></div>
            <div className="right-card-hole"></div>
            <div className="top-transparency"></div>
            <div className="card-top">{days}</div>
            <div className="divider"></div>
            <div className="card-bottom">{days}</div>
          </div>
        </div>
        <div className="time">DAYS</div>
      </div>
      <div className="counter">
        <div className="card-background">
          <div className="card">
            <div className="left-card-hole"></div>
            <div className="right-card-hole"></div>
            <div className="top-transparency"></div>
            <div className="card-top">{hours}</div>
            <div className="divider"></div>
            <div className="card-bottom">{hours}</div>
          </div>
        </div>
        <div className="time">HOURS</div>
      </div>
      <div className="counter">
        <div className="card-background">
          <div className="card">
            <div className="left-card-hole"></div>
            <div className="right-card-hole"></div>
            <div className="top-transparency"></div>
            <div className="card-top">{minutes}</div>
            <div className="divider"></div>
            <div className="card-bottom">{minutes}</div>
          </div>
        </div>
        <div className="time">MINUTES</div>
      </div>
      <div className="counter">
        <div className="card-background">
          <div className="card">
            <div className="left-card-hole"></div>
            <div className="right-card-hole"></div>
            <div className="top-transparency"></div>
            <div className="card-top">{seconds}</div>
            <div className="divider"></div>
            <div className="card-bottom">{seconds}</div>
          </div>
        </div>
        <div className="time">SECONDS</div>
      </div>
    </div>
  );
};

export default Countdown;
