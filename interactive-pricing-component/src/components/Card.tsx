import { FC } from "react";

interface CardProps {
  key: number;
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  const checkmarkImg: string = require("../media/icon-check.svg").default;

  return (
    <div className="checkmark-grouping">
      <img src={checkmarkImg} alt="checkmark" className="checkmark" />
      <p>{title}</p>
    </div>
  );
};

export default Card;
