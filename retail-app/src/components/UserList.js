import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      {users.length === 0 ? <p>No users registered yet.</p> : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>{user.username}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
