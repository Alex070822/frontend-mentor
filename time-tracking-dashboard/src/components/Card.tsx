import { FC } from "react";
import variables from "../styles.scss";

interface Daily {
  current: number;
  previous: number;
}

interface Weekly {
  current: number;
  previous: number;
}

interface Monthly {
  current: number;
  previous: number;
}

interface Timeframes {
  daily: Daily;
  weekly: Weekly;
  monthly: Monthly;
}

interface CardProps {
  title: string;
  timeframes: Timeframes;
  key: string;
}

const Card: FC<CardProps> = ({ title, timeframes }) => {
  let btnImg = require(`../media/icon-ellipsis.svg`).default;
  let work = require(`../media/icon-work.svg`).default;

  return (
    <div
      className="card-bg"
      style={{
        backgroundColor: `${variables.colorOrange1}`,
        backgroundImage: `url(${work})`,
      }}
    >
      <div className="card-content">
        <div className="card-btn-align">
          <h3>{title}</h3>
          <img src={btnImg} alt="Card button" className="card-btn" />
        </div>
        <h1>{timeframes.weekly.current}hrs</h1>
        <p className="previous-time">
          Last Week - {timeframes.weekly.previous}hrs
        </p>
      </div>
    </div>
  );
};

export default Card;
