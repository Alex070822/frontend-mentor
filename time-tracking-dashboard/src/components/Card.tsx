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
  displayDailyHours: boolean;
  displayWeeklyHours: boolean;
  displayMonthlyHours: boolean;
}

const Card: FC<CardProps> = ({
  title,
  timeframes,
  displayDailyHours,
  displayWeeklyHours,
  displayMonthlyHours,
}) => {
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
        <h1>
          {displayDailyHours && timeframes.daily.current}
          {displayWeeklyHours && timeframes.weekly.current}
          {displayMonthlyHours && timeframes.monthly.current}hrs
        </h1>
        <p className="previous-time">
          {displayDailyHours && `Yesterday - ${timeframes.daily.previous}hrs`}
          {displayWeeklyHours && `Last Week - ${timeframes.weekly.previous}hrs`}
          {displayMonthlyHours &&
            `Last Month - ${timeframes.monthly.previous}hrs`}
        </p>
      </div>
    </div>
  );
};

export default Card;
