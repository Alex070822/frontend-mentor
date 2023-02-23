import React, { FC } from "react";

interface UserDashboardProps {
  dailyHours: boolean;
  setDailyHours: React.Dispatch<React.SetStateAction<boolean>>;
  weeklyHours: boolean;
  setWeeklyHours: React.Dispatch<React.SetStateAction<boolean>>;
  monthlyHours: boolean;
  setMonthlyHours: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDashboard: FC<UserDashboardProps> = ({
  dailyHours,
  setDailyHours,
  weeklyHours,
  setWeeklyHours,
  monthlyHours,
  setMonthlyHours,
}) => {
  const displayDailyHours = () => {
    setDailyHours(true);
    setWeeklyHours(false);
    setMonthlyHours(false);
  };
  const displayWeeklyHours = () => {
    setDailyHours(false);
    setWeeklyHours(true);
    setMonthlyHours(false);
  };
  const displayMonthlyHours = () => {
    setDailyHours(false);
    setWeeklyHours(false);
    setMonthlyHours(true);
  };

  const profileImg = require("../media/image-jeremy.png");

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-secondary-container">
        <img src={profileImg} alt="profile img" className="profile-img" />
        <p className="report-title">Report for</p>
        <h2>Jeremy Robson</h2>
      </div>
      <div className="dashboard-tab">
        <button
          className={dailyHours ? "selected-dashboard-btn" : "dashboard-btn"}
          onClick={displayDailyHours}
        >
          Daily
        </button>
        <button
          className={weeklyHours ? "selected-dashboard-btn" : "dashboard-btn"}
          onClick={displayWeeklyHours}
        >
          Weekly
        </button>
        <button
          className={monthlyHours ? "selected-dashboard-btn" : "dashboard-btn"}
          onClick={displayMonthlyHours}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
