import { css } from "@emotion/css";
import Timer from "./components/Timer/Timer";
import Footer from "./components/Footer/Footer";
import { widthBreakpoint } from "./components/shared";

const appCss = css`
  height: 100vh;
`;
const titleCss = css`
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 6.13636px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 142px;
  padding: 0 6.4%;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 22px;
    letter-spacing: 7.5px;
    line-height: 29px;
    margin-top: 132px;
    padding: 0;
  }
`;

function App() {
  return (
    <div className={appCss}>
      <main>
        <h1 className={titleCss}>We're launching soon</h1>
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
