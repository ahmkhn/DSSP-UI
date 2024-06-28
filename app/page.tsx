'use client';
import Header from "./Components/Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster"; 
import UserInfo from "./Components/UserInfo";
import tempImage from "../public/ali.jpeg";
export default function Home() {

  const markers = [
    {
      geocode: [31.4100,74.2417],
      popUp: <UserInfo userName="syed ali zia jaffery"> </UserInfo>
    },
    {
      geocode:[31.4400,74.2417],
      popUp: "test individual"
    }
  ]

  const customIcon = new Icon({
    iconUrl: "https://www.reshot.com/preview-assets/icons/RM6FSKE2Y7/flag-RM6FSKE2Y7.svg",
    iconSize: [30,30]
  });


  return (
    <>
      <title>DSSP</title>
      <div className="flex justify-center mb-2">
        <Header/>
      </div>
      <div className="flex flex-col justify-center bg-[#a2a8d3] h-[95vh]">
        <div className="flex justify-center flex-grow">
          <MapContainer className="w-[80%] rounded-[0.25rem] mt-10" center={[31.3909,74.2417]} zoom={13}>
                /<TileLayer
                attribution="Google Maps"
                //url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
                //url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
                //url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />*/


                // map through markers
                <MarkerClusterGroup
                  chunkedLoading
                  
                >
                  {markers.map(marker=>(
                    <Marker position={marker.geocode} icon={customIcon}>
                      <Popup>
                        {marker.popUp}
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
                


          </MapContainer>
        </div>
        <div>
          <footer className="text-center h-[1rem] text-xs bg-white">developed by <a target="_blank" className="underline text-blue-500" href="https://linkedin.com/in/ahmkhn">@ahmkhn</a></footer>
        </div>
      </div>
    </>
  );
}
