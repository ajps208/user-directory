import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "../App.css";

// Custom Icons
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const activeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Fly to selected user
function FlyToUser({ selectedUser }) {
  const map = useMap();

  useEffect(() => {
    if (selectedUser) {
      const lat = parseFloat(selectedUser.address.geo.lat);
      const lng = parseFloat(selectedUser.address.geo.lng);
      map.flyTo([lat, lng], 10, { duration: 1.5 });
    }
  }, [selectedUser, map]);

  return null;
}

export const MapView = ({ users, selectedUser, onSelect }) => {
  return (
    // map container
    <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
      {/*  openstreetmap */}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Fly to selected user */}
      <FlyToUser selectedUser={selectedUser} />

      {/* user markers */}
      {users.map((user) => {
        const lat = parseFloat(user.address.geo.lat);
        const lng = parseFloat(user.address.geo.lng);

        return (
          <Marker
            key={user.id}
            position={[lat, lng]}
            icon={selectedUser?.id === user.id ? activeIcon : defaultIcon}
            eventHandlers={{
              click: () => onSelect(user),
            }}
          >
              <Popup>
              <div className="popup-content">
                <div className="popup-name">{user.name}</div>
                <div className="popup-email">{user.email}</div>
                <div className="popup-city">
                  <span className="popup-city-label">City</span>
                  <span>{user.address.city}</span>
                </div>
                <div className="popup-coords">
                  <span className="popup-coords-label">Coords</span>
                  <span className="popup-coords-val">
                    {parseFloat(user.address.geo.lat).toFixed(4)},&nbsp;
                    {parseFloat(user.address.geo.lng).toFixed(4)}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
