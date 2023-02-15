import { FC } from "react";

interface CardProps {
  title: string;
  bgColor: string;
  bgImg: string;
}

const Card: FC<CardProps> = ({ title, bgColor, bgImg }) => {
  let bgImgUrl = require(`../media/icon-play.svg`).default;

  return (
    <div
      className="card-bg"
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        backgroundColor: `${bgColor}`,
      }}
    >
      <div className="card-content">
        <h3>{title}</h3>
        <h1>32hrs (weekly)</h1>
        <p className="previous-time">36hrs (weekly)</p>
        5hrs (daily) Previous - 7hrs (daily) Previous - 103hrs (monthly)
        Previous - 128hrs (monthly)
      </div>
    </div>
  );
};

// Play 1hr
//         (daily) Previous - 2hrs (daily) 10hrs (weekly) Previous - 8hrs (weekly)
//         23hrs (monthly) Previous - 29hrs (monthly) Study 0hrs (daily) Previous -
//         1hr (daily) 4hrs (weekly) Previous - 7hrs (weekly) 13hrs (monthly)
//         Previous - 19hrs (monthly) Exercise 1hr (daily) Previous - 1hr (daily)
//         4hrs (weekly) Previous - 5hrs (weekly) 11hrs (monthly) Previous - 18hrs
//         (monthly) Social 1hr (daily) Previous - 3hrs (daily) 5hrs (weekly)
//         Previous - 10hrs (weekly) 21hrs (monthly) Previous - 23hrs (monthly)
//         Self Care 0hrs (daily) Previous - 1hr (daily) 2hrs (weekly) Previous -
//         2hrs (weekly) 7hrs (monthly) Previous - 11hrs (monthly)
export default Card;
