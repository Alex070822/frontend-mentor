import { FC } from "react";

interface CardProps {
  title: string;
  bgColor: string;
  bgImg: string;
}

const Card: FC<CardProps> = ({ title, bgColor, bgImg }) => {
  let btnImg = require(`../media/icon-ellipsis.svg`).default;
  let bgImgUrl = require(`../media/icon-play.svg`).default;

  return (
    <div
      className="card-bg"
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${bgImgUrl})`,
      }}
    >
      <div className="card-content">
        <div className="card-btn-align">
          <h3>{title}</h3>
          <img src={btnImg} alt="Card button" className="card-btn" />
        </div>
        <h1>32hrs</h1>
        <p className="previous-time">Last Week - 36hrs</p>
      </div>
    </div>
  );
};

export default Card;
