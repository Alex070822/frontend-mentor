import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <h1>We're launching soon</h1>
        <Countdown />
      </main>
      <Footer />
    </div>
  );
}

export default App;
