import { FC } from "react";

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
  dailyHours: boolean;
  weeklyHours: boolean;
  monthlyHours: boolean;
  bgColor: string;
  bgImg: string;
}

const Card: FC<CardProps> = ({
  title,
  timeframes,
  dailyHours,
  weeklyHours,
  monthlyHours,
  bgColor,
  bgImg,
}) => {
  let btnImg = require(`../media/icon-ellipsis.svg`).default;

  return (
    <div
      className="card-bg"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(/img/${bgImg})`,
      }}
    >
      <div className="card-content">
        <div className="card-btn-align">
          <h3>{title}</h3>
          <img src={btnImg} alt="Card button" className="card-btn" />
        </div>
        <h1>
          {dailyHours && timeframes.daily.current}
          {weeklyHours && timeframes.weekly.current}
          {monthlyHours && timeframes.monthly.current}hrs
        </h1>
        <p className="previous-time">
          {dailyHours && `Yesterday - ${timeframes.daily.previous}hrs`}
          {weeklyHours && `Last Week - ${timeframes.weekly.previous}hrs`}
          {monthlyHours && `Last Month - ${timeframes.monthly.previous}hrs`}
        </p>
      </div>
    </div>
  );
};

export default Card;
