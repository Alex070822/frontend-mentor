import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
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
          Your Name Here
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
