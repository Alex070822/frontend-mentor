import "./styles.scss";
import UserDashboard from "./components/UserDashboard";
import Card from "./components/Card";
import cardLayoutData from "./data/cardLayoutData";

function App() {
  const card = cardLayoutData.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        bgColor={item.bgColor}
        bgImg={item.bgImg}
      />
    );
  });

  return (
    <div className="App">
      <main>
        <UserDashboard />
        <div className="card-container">{card}</div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
