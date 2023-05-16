import "./App.css";
import Timer from "./components/Timer/Timer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <h1>We're launching soon</h1>
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
