import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State variables

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetching data for users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtering users
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
        <h2>User Directory</h2>

        {/* search bar */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />

        {loading && <p>Loading users...</p>}
        {filteredUsers.length === 0 && <p>No users found.</p>}

        {error && <p>{error}</p>}

        {filteredUsers.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="map-container">
        <p>Map will appear here</p>
      </div>
    </div>
  );
}

export default App;
