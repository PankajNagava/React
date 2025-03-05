import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "#2C3E50" }}>
      <Toolbar>
        {/* Logo */}
        <img 
          src="https://via.placeholder.com/50" 
          alt="Logo" 
          style={{ marginRight: "10px", borderRadius: "50%" }}
        />

        {/* Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyStore
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          <HomeIcon sx={{ marginRight: "5px" }} /> Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          <StoreIcon sx={{ marginRight: "5px" }} /> Products
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          <ContactMailIcon sx={{ marginRight: "5px" }} /> Contact
        </Button>

        {/* Cart Icon */}
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
