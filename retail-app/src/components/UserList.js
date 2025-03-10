import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Access Denied! Please Sign Up First.");
      navigate("/signup"); // Redirect back to sign-up page if not logged in
      return;
    }

    // Load registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, [navigate]);

  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
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
