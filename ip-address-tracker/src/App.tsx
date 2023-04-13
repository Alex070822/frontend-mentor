import "./App.css";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { IpAddressData, IpAddress } from "./components";
import Results from "./components/Results/Results";

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

interface AppState {
  ipAddressData: IpAddress[];
  shouldLoadItems: boolean;
}

function App() {
  const [{ ipAddressData, shouldLoadItems }, setModel] = useState<AppState>({
    ipAddressData: [],
    shouldLoadItems: true,
  });
  const [ipAddress, setIpAddress] = useState("");
  const ipDataUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=at_L4axikBrOmxO0MMb9HUtFVQ67JOch&ipAddress=${ipAddress}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ipDataUrl);
      const data: IpAddress[] = await response.json();
      setModel({
        ipAddressData: data,
        shouldLoadItems: false,
      });
    };
    if (shouldLoadItems) {
      fetchData();
    }
  }, [shouldLoadItems]);

  console.log(ipAddressData);

  function inputIp(e: { preventDefault: () => void }) {
    setModel((prevState) => {
      return {
        ...prevState,
        shouldLoadItems: true,
      };
    });
    e.preventDefault();
  }

  const { ip, location, domains, as, isp }: IpAddressData = ipAddressData;

  return (
    <div className="App">
      <main className={mainCss}>
        <h1 className={mainTitleCss}>IP Address Tracker</h1>
        <form className={searchBarContainerCss} onSubmit={inputIp}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className={searchInputCss}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <input type="submit" value="" className={searchBarButtonCss} />
        </form>
        <Results
          ip={ip}
          location={getLocation(
            location.city,
            location.country,
            location.postalCode
          )}
          timezone={location.timezone}
          isp={isp}
        />
      </main>
    </div>
  );
}

function getLocation(city: string, country: string, postalCode: string) {
  return `${city}, ${country} ${postalCode}`;
}

export default App;
