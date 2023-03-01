import { FC } from "react";
import { Period, Timeframes } from "./index";

interface CardProps {
  title: string;
  timeframes: Timeframes;
  key: string;
  period: Period;
  bgColor: string;
  bgImg: string;
}

const Card: FC<CardProps> = ({ title, timeframes, period, bgColor, bgImg }) => {
  let btnImg = require(`../media/icon-ellipsis.svg`).default;

  const { current, previous } = timeframes[getTimeframePeriod(period)];

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
          <p className="activity-title">{title}</p>
          <img src={btnImg} alt="Card button" className="card-btn" />
        </div>
        <h1>{current}hrs</h1>
        <p className="previous-time">{previous}hrs</p>
      </div>
    </div>
  );
};

function getTimeframePeriod(period: Period): keyof Timeframes {
  switch (period) {
    case "DAILY":
      return "daily";
    case "WEEKLY":
      return "weekly";
    case "MONTHLY":
      return "monthly";
  }
}

export default Card;
