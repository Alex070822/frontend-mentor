import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { css } from "@emotion/css";
import L from "leaflet";
import { FC, useEffect, useRef, useState } from "react";
import { widthBreakpoint } from "../shared";

const mapPositionCss = css`
  position: relative;
  margin-top: 132px;
  flex: 1;
  width: 100%;
  z-index: 1;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    margin-top: 112px;
  }
`;
const mapSizingCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
`;

interface Coordinates {
  position: [number, number];
}

let customIcon = L.icon({
  iconUrl: "src/assets/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

const MapView: FC<Coordinates> = ({ position }) => {
  const mapRef = useRef<L.Map | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (map && position) {
      map.flyTo(position, 16, { duration: 2 });
    }
  }, [map, position]);

  useEffect(() => {
    if (mapRef.current) {
      setMap(mapRef.current);
    }
  }, [mapRef]);

  return (
    <div className={mapPositionCss}>
      <MapContainer
        center={position}
        zoom={16}
        zoomControl={false}
        scrollWheelZoom={false}
        className={mapSizingCss}
        ref={mapRef}
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
