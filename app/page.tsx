'use client';
import LeafletMap from "./Components/leafletmap";
import { MapContainer } from "react-leaflet";
export default function Home() {
  return (
    <div className="h-[90vh]">
      <title>DSSP</title>
      <h1 className="text-center mt-2">Decolonizing Social Sciences in Pakistan</h1>
      <LeafletMap>
        
      </LeafletMap>
    </div>
  );
}
