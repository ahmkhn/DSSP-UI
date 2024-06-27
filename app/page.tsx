'use client';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Home() {
  return (
    <>
      <div>
        <title>DSSP</title>
        <h1 className="text-center mt-2">Decolonizing Social Sciences in Pakistan</h1>
      </div>
      <div className="flex justify-center">
        <MapContainer className="h-[80vh] max-h-[90vh] w-[90%] rounded-[1rem]" center={[31.3909,74.2417]} zoom={12.5}>
              <TileLayer
              attribution="Google Maps"
              //url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
              //url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
              url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
              maxZoom={20}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
          </MapContainer>
      </div>
    </>
  );
}
