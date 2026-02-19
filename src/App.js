import React, { useEffect, useState } from "react";
import { UserList } from "./components/UserList";
import { MapView } from "./components/MapView";
import "./App.css";

function App() {
  // State variables
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter users based on search
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="header-left">
          <span className="header-logo">◈</span>
          <h1 className="header-title">USER DIRECTORY</h1>
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="🔍  Search by Name ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />

        {/* Loading and error messages */}
        {loading && (
          <div className="center-state">
            <p>Loading users...</p>
          </div>
        )}

        {error && (
          <div className="center-state">
            <p className="error">{error}</p>
          </div>
        )}

        {/* No users found message */}
        {!loading && !error && filteredUsers.length === 0 && (
          <div className="center-state">
            <p className="empty">No users found.</p>
          </div>
        )}

        {/* User list */}
        {!loading && !error && (
          <UserList
            users={filteredUsers}
            onSelect={setSelectedUser}
            selectedUser={selectedUser}
          />
        )}
      </div>

      {/* Map view */}
      <div className="map-container">
        <MapView
          users={filteredUsers}
          selectedUser={selectedUser}
          onSelect={setSelectedUser}
        />
      </div>
    </div>
  );
}

export default App;
