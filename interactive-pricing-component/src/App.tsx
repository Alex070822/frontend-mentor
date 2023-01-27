import "./styles.scss";
import { useRef, useState } from "react";

function App() {
  //Range slider
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(16);
  const viewsPerDollar = sliderValue * 6.25;

  //Toggle switch
  const [pricing, setPricing] = useState(false);
  const monthlyCost = sliderValue;
  const annualCost = sliderValue * 12 * 0.75;

  const checkmarkImg = require("./media/icon-check.svg").default;

  function togglePricing() {
    setPricing((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <header>
        <div className="header-bg-img">
          <div>
            <h1>Simple, traffic-based pricing</h1>
            <h2>
              <span>Sign-up for our 30-day trial. </span>
              <span>No credit card required.</span>
            </h2>
          </div>
        </div>
      </header>
      <main>
        <div></div>
        <p className="page-views">{`${viewsPerDollar}K Pageviews`}</p>
        <div className="amount-per-period">
          <span className="amount">{`$${
            !pricing ? monthlyCost : annualCost
          }`}</span>
          <span className="period">/ month</span>
        </div>
        <div className="slide-container">
          <input
            onChange={() => {
              if (sliderRef.current != null) {
                setSliderValue(sliderRef.current["value"]);
              }
            }}
            type="range"
            value={sliderValue}
            min="2"
            max="32"
            step="2"
            ref={sliderRef}
          />
        </div>
        <div className="billing-grouping">
          <div className="toggle-info">
            <p className="toggle-details">Monthly Billing</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={togglePricing}
                aria-label="toggle-pricing"
              />
              <div className="round slider"></div>
            </label>
            <p className="toggle-details">Yearly Billing</p>
          </div>
          <p className="discount">25% discount</p>
        </div>
        <hr />
        <div className="benefits-grouping">
          <div className="benefits">
            <div className="checkmark-grouping">
              <img src={checkmarkImg} alt="checkmark" className="checkmark" />
              <p>Unlimited websites</p>
            </div>
            <div className="checkmark-grouping">
              <img src={checkmarkImg} alt="checkmark" className="checkmark" />
              <p>100% data ownership</p>
            </div>
            <div className="checkmark-grouping">
              <img src={checkmarkImg} alt="checkmark" className="checkmark" />
              <p>Email reports</p>
            </div>
          </div>
          <button className="trial-btn">Start my trial</button>
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default App;
