import "./styles.scss";
import UserDashboard from "./components/UserDashboard";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <main>
        <UserDashboard />
        <div className="card-container">
          <Card />
        </div>
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
