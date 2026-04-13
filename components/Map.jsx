"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { 
    ssr: false,
    loading: () => <div className="map-loading">Cargando mapa...</div> 
  }
);

const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

export default function Map() {
  const [icon, setIcon] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const L = require("leaflet");
    const goldIcon = new L.Icon({
      iconUrl: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#b08d57" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>`),
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
    setIcon(goldIcon);
  }, []);

  if (!isMounted || !icon) {
    return <div style={{ height: "450px", backgroundColor: "#fdfaf6" }}></div>;
  }

  return (
    <section className="map-section" id="map">
      <h2 className="map-title">Ubicación</h2>
      
      <div className="map-wrapper">
        <MapContainer
          center={[37.8845, -4.81]} 
          zoom={13}
          scrollWheelZoom={false}
          className="leaflet-container-style"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Mezquita-Catedral */}
          <Marker position={[37.8790, -4.7794]} icon={icon}>
            <Popup>
              <div className="map-popup-content">
                <strong>Ceremonia</strong><br />
                Mezquita-Catedral de Córdoba
              </div>
            </Popup>
          </Marker>

          {/* Hacienda de la Albaida */}
          <Marker position={[37.9086, -4.8514]} icon={icon}>
            <Popup>
              <div className="map-popup-content">
                <strong>Celebración</strong><br />
                Hacienda de la Albaida
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}