import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapPerizinan = ({ onLocationChange }) => {
  const [selectedLocation, setSelectedLocation] = useState({ latitude: -7.2575, longitude: 112.7521 });

  useEffect(() => {
    const map = L.map("map").setView([selectedLocation.latitude, selectedLocation.longitude], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const marker = L.marker([selectedLocation.latitude, selectedLocation.longitude], { draggable: true })
      .addTo(map)
      .bindPopup(`Longitude: ${selectedLocation.longitude.toFixed(6)}, Latitude: ${selectedLocation.latitude.toFixed(6)}`)
      .openPopup();

    map.on("click", (event) => {
      const clickedPosition = event.latlng;
      const latitude = clickedPosition.lat;
      const longitude = clickedPosition.lng;
      setSelectedLocation({ latitude, longitude });
      marker.setLatLng(clickedPosition).update();

      onLocationChange({ latitude, longitude });
    });

    // console.log(selectedLocation);

    return () => {
      map.remove();
    };
  }, [selectedLocation]);

  return <div id="map" className="h-96 w-full mb-6 rounded-2xl z-[1]"></div>;
};

export default MapPerizinan;
