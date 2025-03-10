export const registerUser = (userData) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Prevent duplicate emails
    const userExists = users.find(user => user.email === userData.email);
    if (userExists) {
      alert("User with this email already exists. Please log in.");
      return;
    }
  
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users)); // Store users in local database
    localStorage.setItem("currentUser", JSON.stringify(userData)); // Set logged-in user
  };
  