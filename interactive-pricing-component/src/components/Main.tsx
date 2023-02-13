import { useRef, useState } from "react";
import RangeSlider from "./RangeSlider";
import Card from "./Card";
import data from "../data/data";

function Main() {
  //Range slider
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [sliderValue, setSliderValue] = useState(16);
  const viewsPerDollar = sliderValue * 6.25;

  //Toggle switch
  const [pricing, setPricing] = useState(false);
  const monthlyCost = sliderValue;
  const annualCost = sliderValue * 12 * 0.75;

  function togglePricing() {
    setPricing((prevMode) => !prevMode);
  }

  const cards = data.map((item) => {
    return <Card key={item.id} title={item.title} />;
  });

  return (
    <main>
      <div className="mobile-view-order">
        <p className="page-views">{`${viewsPerDollar}K Pageviews`}</p>
        <div className="amount-per-period">
          <span className="amount">{`$${
            !pricing ? monthlyCost.toFixed(2) : annualCost.toFixed(2)
          }`}</span>
          <span className="period">{`/ ${!pricing ? "month" : "year"}`}</span>
        </div>
        <div className="slide-container">
          <RangeSlider {...{ sliderRef, sliderValue, setSliderValue }} />
        </div>
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
        <p className="discount-mobile">-25%</p>
      </div>
      <hr />
      <div className="benefits-grouping">
        <div className="benefits">{cards}</div>
        <button className="trial-btn">Start my trial</button>
      </div>
    </main>
  );
}

export default Main;
