import React, { useEffect, useRef } from "react";
import "../App.css";

export const UserList = ({ users, onSelect, selectedUser }) => {
  const userRefs = useRef({});

  // Scroll to selected user
  useEffect(() => {
    if (selectedUser && userRefs.current[selectedUser.id]) {
      userRefs.current[selectedUser.id].scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
    }
  }, [selectedUser]);

  return (
      <div className="user-list">
      {users.map((user) => {
        const firstLetter = user.name.charAt(0).toUpperCase();

        return (
          <div
            key={user.id}
            className={
              selectedUser?.id === user.id
                ? "user-card active"
                : "user-card"
            }
            onClick={() => onSelect(user)}
          >
            <div className="user-card-content">
              {/* Avatar */}
              <div className="avatar">
                {firstLetter}
              </div>

              {/* User Info */}
              <div className="user-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <small>{user.address.city}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
