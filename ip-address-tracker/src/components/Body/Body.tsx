import { css } from "@emotion/css";

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const mainTitleCss = css`
  color: #ffffff;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.232143px;
  margin: 26px 0 29px 0;
`;
const searchBarContainerCss = css`
  display: flex;
  margin-bottom: 24px;
`;
const searchInputCss = css`
  color: #2c2c2c;
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 400;
  height: 58px;
  width: 71.73333vw;
  border: none;
  border-radius: 15px 0 0 15px;
  padding-left: 24px;
  &:focus {
    outline: none;
  }
`;
const searchBarButtonCss = css`
  border: none;
  border-radius: 0 15px 15px 0;
  background: #000000;
  height: 58px;
  width: 58px;
  cursor: pointer;
  background-image: url("src/assets/icon-arrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background: #3f3f3f;
    background-image: url("src/assets/icon-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const resultsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 87.201%;
  border-radius: 15px;
  padding: 26px 24px 0 24px;
`;
const resultCss = css`
  text-align: center;
`;
const resultTitleCss = css`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.45833px;
  margin-bottom: 7px;
  opacity: 0.5;
`;
const resultInfoCss = css`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.178571px;
  margin-bottom: 24px;
`;

function Body() {
  return (
    <main className={mainCss}>
      <h1 className={mainTitleCss}>IP Address Tracker</h1>
      <div className={searchBarContainerCss}>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search for any IP address or domain"
            className={searchInputCss}
          />
        </form>
        <button className={searchBarButtonCss}></button>
      </div>
      <div className={resultsContainerCss}>
        <div className={resultCss}>
          <div className={resultTitleCss}>IP Address</div>
          <div className={resultInfoCss}>192.212.174.101</div>
        </div>
        <div className={resultCss}>
          <div className={resultTitleCss}>Location</div>
          <div className={resultInfoCss}>Brooklyn, NY 10001</div>
        </div>
        <div className={resultCss}>
          <div className={resultTitleCss}>Timezone</div>
          <div className={resultInfoCss}>UTC -05:00</div>
        </div>
        <div className={resultCss}>
          <div className={resultTitleCss}>ISP</div>
          <div className={resultInfoCss}>SpaceX Starlink</div>
        </div>
      </div>
    </main>
  );
}

export default Body;
