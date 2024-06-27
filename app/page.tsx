'use client';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Home() {
  return (
    <div className="h-[90vh]">
      <title>DSSP</title>
      <h1 className="text-center mt-2">Decolonizing Social Sciences in Pakistan</h1>
      <MapContainer className="w-[80%] h-[80vh] mb-20 max-h-[110%]" center={[31.3909,74.2417]} zoom={13}>
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
  );
}
