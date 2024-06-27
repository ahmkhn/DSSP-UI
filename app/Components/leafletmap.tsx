'use client';
import { MapContainer, TileLayer } from "react-leaflet";
export default function LeafletMap() {
    return (
      <div>
        <MapContainer center={[31.5204,74.3587]} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
      </div>
    );
}
  