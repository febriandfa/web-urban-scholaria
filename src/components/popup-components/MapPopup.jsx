import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapPopup = ({ alamat, latitude, longitude, close }) => {
  useEffect(() => {
    const latitudeValue = parseFloat(latitude);
    const longitudeValue = parseFloat(longitude);

    const map = L.map("map").setView([latitudeValue, longitudeValue], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    L.marker([latitudeValue, longitudeValue])
      .addTo(map)
      .bindPopup(`Longitude: ${longitudeValue.toFixed(6)}, Latitude: ${latitudeValue.toFixed(6)}`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="bg-white p-10 rounded-3xl w-[40rem] h-fit">
      <h1 className="text-brand-500 font-semibold text-center text-2xl mb-1">Lihat Lokasi</h1>
      <h4 className="text-sm text-center">{alamat}</h4>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-4" />
      <div id="map" className="h-[17rem] w-full mb-6 rounded-2xl z-[1]"></div>
    </div>
  );
};

export default MapPopup;
