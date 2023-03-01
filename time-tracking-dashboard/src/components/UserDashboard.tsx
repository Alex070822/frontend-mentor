import React, { FC } from "react";
import { Period } from "./index";
import { v4 as uuidv4 } from "uuid";

interface Props {
  period: Period;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const UserDashboard: FC<Props> = ({ period, setPeriod }) => {
  const profileImg = require("../media/image-jeremy.png");

  const items: Array<{
    value: Period;
    label: string;
  }> = [
    {
      value: "DAILY",
      label: "Daily",
    },
    {
      value: "WEEKLY",
      label: "Weekly",
    },
    {
      value: "MONTHLY",
      label: "Monthly",
    },
  ];

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-secondary-container">
        <img src={profileImg} alt="profile img" className="profile-img" />
        <p className="report-title">Report for</p>
        <h2>Jeremy Robson</h2>
      </div>
      <div className="dashboard-tab">
        {items.map(({ value, label }) => (
          <button
            key={uuidv4()}
            className={
              period === value ? "selected-dashboard-btn" : "dashboard-btn"
            }
            onClick={() => setPeriod(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
