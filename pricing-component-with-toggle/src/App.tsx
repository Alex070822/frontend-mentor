import "./App.css";
import { useState } from "react";

function App() {
  const [pricing, setPricing] = useState(true);

  function togglePricing() {
    setPricing((prevMode) => !prevMode);
  }

  return (
    <div className="main-container">
      <header>
        <h2 className="pricing-title">Our Pricing</h2>
        <div className="toggle-info">
          <h3 className="toggle-details">Annually</h3>
          <label className="switch">
            <input
              type="checkbox"
              onClick={togglePricing}
              aria-label="toggle-pricing"
            />
            <span className="slider round"></span>
          </label>
          <h3 className="toggle-details">Monthly</h3>
        </div>
      </header>
      <main>
        <div className="side-info-box">
          <div className="plan-title">Basic</div>
          <h1 className="price">{!pricing ? "$19.99" : "$199.99"}</h1>
          <hr />
          500 GB Storage
          <hr />
          2 Users Allowed
          <hr />
          Send up to 3 GB
          <hr />
          <button>Learn More</button>
        </div>
        <div className="center-info-box">
          <div className="plan-title">Professional</div>
          <h1 className="price">{!pricing ? "$24.99" : "$249.99"}</h1>
          <hr />
          1 TB Storage
          <hr />
          5 Users Allowed
          <hr />
          Send up to 10 GB
          <hr />
          <button>Learn More</button>
        </div>
        <div className="side-info-box">
          <div className="plan-title">Master</div>
          <h1 className="price">{!pricing ? "$39.99" : "$399.99"}</h1>
          <hr />
          2 TB Storage
          <hr />
          10 Users Allowed
          <hr />
          Send up to 20 GB
          <hr />
          <button>Learn More</button>
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/Alex070822"
          target="_blank"
          rel="noreferrer noopener"
        >
          Alexis González
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
