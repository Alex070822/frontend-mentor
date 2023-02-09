import { useRef, useState } from "react";
import RangeSlider from "./RangeSlider";

function Main() {
  //Range slider
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(16);
  const viewsPerDollar = sliderValue * 6.25;
  console.log(sliderRef);

  //Toggle switch
  const [pricing, setPricing] = useState(false);
  const monthlyCost = sliderValue;
  const annualCost = sliderValue * 12 * 0.75;

  const checkmarkImg = require("../media/icon-check.svg").default;

  function togglePricing() {
    setPricing((prevMode) => !prevMode);
  }

  return (
    <main>
      <p className="page-views">{`${viewsPerDollar}K Pageviews`}</p>
      <div className="amount-per-period">
        <span className="amount">{`$${
          !pricing ? monthlyCost.toFixed(2) : annualCost.toFixed(2)
        }`}</span>
        <span className="period">/ month</span>
      </div>
      <div className="slide-container">
        <RangeSlider {...{ sliderRef, sliderValue, setSliderValue }} />
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
  );
}

export default Main;
