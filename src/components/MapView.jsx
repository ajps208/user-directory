
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


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

export const MapView =({ users, selectedUser, onSelect }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToUser selectedUser={selectedUser} />

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
              <strong>{user.name}</strong>
              <br />
              {user.email}
              <br />
              {user.address.city}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

