import "./App.css";
import { css } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import { IpAddress } from "./components";
import Results from "./components/Results/Results";
import MapView from "./components/MapView/MapView";
import { widthBreakpoint } from "./components/shared";
import "react-tooltip/dist/react-tooltip.css";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const mainTitleCss = css`
  color: #ffffff;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.232143px;
  margin: 26px 0 29px 0;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 32px;
    margin: 33px 0 31px 0;
  }
`;
const searchBarContainerCss = css`
  display: flex;
  margin-bottom: 24px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    margin-bottom: 0;
  }
`;
const searchInputCss = css`
  color: #2c2c2c;
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 400;
  height: 58px;
  width: 71.73333vw;
  max-width: 497px;
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
  background-image: url("/assets/icon-arrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background: #3f3f3f;
    background-image: url("/assets/icon-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const mapContainerCss = css`
  height: 100%;
  width: 100%;
  z-index: 1;
  margin-top: 132px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    margin-top: 112px;
  }
`;

interface AppState {
  ipAddress: IpAddress | undefined;
  shouldLoadItems: boolean;
}

function App() {
  const [{ ipAddress, shouldLoadItems }, setModel] = useState<AppState>({
    ipAddress: undefined,
    shouldLoadItems: true,
  });

  const [ipAddressStr, setIpAddressStr] = useState("");
  const url = `/api/api/v2/country,city?apiKey=at_1WSsHxxD8zSxCus2Qbelf0CMAnnpj&ipAddress=${ipAddressStr}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const ipAddress: IpAddress = await response.json();

      setModel({
        ipAddress: ipAddress,
        shouldLoadItems: false,
      });
    };
    if (shouldLoadItems) {
      fetchData();
    }
  }, [shouldLoadItems]);

  function inputIp(e: { preventDefault: () => void }) {
    setModel((prevState) => {
      return {
        ...prevState,
        shouldLoadItems: true,
      };
    });
    e.preventDefault();
  }

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSearchClick = () => {
    const inputValue: string | undefined = inputRef.current?.value;
    if (inputValue) {
      setIpAddressStr(inputValue);
    }
  };

  return (
    <div className="App">
      <main className={mainCss}>
        <h1 className={mainTitleCss}>IP Address Tracker</h1>
        <form className={searchBarContainerCss} onSubmit={inputIp}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            maxLength={15}
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            title="Not a valid IP address."
            className={searchInputCss}
            ref={inputRef}
            aria-label="search bar"
          />
          <input
            type="submit"
            value=""
            className={searchBarButtonCss}
            onClick={handleSearchClick}
            aria-label="search bar button"
          />
        </form>
        {ipAddress && (
          <>
            <Results
              ip={ipAddress.ip}
              location={getLocation(
                ipAddress.location.city,
                ipAddress.location.country,
                ipAddress.location.postalCode
              )}
              timezone={ipAddress.location.timezone}
              isp={ipAddress.isp}
            />
            <MapContainer
              center={getCoordinates(
                ipAddress.location.lat,
                ipAddress.location.lng
              )}
              zoom={16}
              zoomControl={false}
              scrollWheelZoom={false}
              className={mapContainerCss}
            >
              <MapView
                position={getCoordinates(
                  ipAddress.location.lat,
                  ipAddress.location.lng
                )}
              />
            </MapContainer>
          </>
        )}
      </main>
    </div>
  );
}

function getLocation(city: string, country: string, postalCode: string) {
  return `${city}, ${country} ${postalCode}`;
}

function getCoordinates(lat: number, lng: number): [number, number] {
  return [lat, lng];
}

export default App;
