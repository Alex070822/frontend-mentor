function UserDashboard() {
  const profileImg = require("../media/image-jeremy.png");

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-secondary-container">
        <img src={profileImg} alt="profile img" className="profile-img" />
        <p className="report-title">Report for</p>
        <h2>Jeremy Robson</h2>
      </div>
      Daily Weekly Monthly
    </div>
  );
}

export default UserDashboard;
