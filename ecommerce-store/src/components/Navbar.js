import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/"); // Redirect to Login Page on logout
  };

  return (
    <AppBar position="static" sx={{ background: "#2C3E50" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
            MyStore
          </Link>
        </Typography>

        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
