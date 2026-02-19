import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapView = ({ users }) => {
  return (
    //  map container
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
        {/* tile layer */}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

     {/* markers for users */}
      {users.map((user) => (
        <Marker
          key={user.id}
          position={[
            parseFloat(user.address.geo.lat),
            parseFloat(user.address.geo.lng),
          ]}
        >
            {/* popup to display user name and city */}
          <Popup>
            {user.name} - {user.address.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
