import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { css } from "@emotion/css";
import L from "leaflet";
import {FC} from "react";

const mapPositionCss = css`
  position: relative;
  margin-top: 132px;
  flex: 1;
  width: 100%;
  z-index: 1;
`;
const mapSizingCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
`;

interface Coordinates {
  lat: number;
  lng: number;
}

let customIcon = L.icon({
  iconUrl: "src/assets/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

const MapView: FC<Coordinates> = ({ lat, lng }) => {
  const position = [lat, lng];

  return (
    <div className={mapPositionCss}>
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        className={mapSizingCss}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
