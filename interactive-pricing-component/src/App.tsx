import "./styles.scss";
import { useRef } from "react";

function App() {
  const sliderRef = useRef(null);
  console.log(sliderRef);

  return (
    <div className="App">
      <header>
        <div className="header-bg-img">
          <div>
            <h1>Simple, traffic-based pricing</h1>
            <h2>Sign-up for our 30-day trial. No credit card required.</h2>
          </div>
        </div>
      </header>
      <main>
        <div></div>
        <p className="page-views">100K Pageviews</p>
        <div className="amount-per-period">
          <span className="amount">16</span>
          <span className="period">/ month</span>
        </div>
        <div className="slide-container">
          <input
            type="range"
            min="1"
            max="32"
            defaultValue="16"
            className="slider"
            id="myRange"
            ref={sliderRef}
          />
        </div>
        <p>
          Monthly Billing Yearly Billing 25% discount Unlimited websites 100%
          data ownership Email reports Start my trial
        </p>
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
