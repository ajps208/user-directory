import React from "react";

export const UserList = ({ users, onSelect, selectedUser }) => {
  return (
    <div className="user-list">
      {users?.map((user) => (
        <div key={user.id} onClick={() => onSelect(user)}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <small>{user.address.city}</small>
        </div>
      ))}
    </div>
  );
};
