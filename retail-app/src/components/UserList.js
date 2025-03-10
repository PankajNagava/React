import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Access Denied! Please Register First.");
      navigate("/signup");  // Redirect to sign-up page if not logged in
      return;
    }

    // Load all registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    if (storedUsers.length === 0) {
      console.log("No users found in localStorage");
    } else {
      console.log("Users retrieved from localStorage:", storedUsers);
    }

    setUsers(storedUsers);
  }, [navigate]);

  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
