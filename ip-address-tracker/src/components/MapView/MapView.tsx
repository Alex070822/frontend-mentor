import { Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FC, useEffect } from "react";

interface Coordinates {
  position: [number, number];
}

let customIcon = L.icon({
  iconUrl: "src/assets/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

const MapView: FC<Coordinates> = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 16, { duration: 2 });
  }, [position]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}></Marker>
    </>
  );
};

export default MapView;
