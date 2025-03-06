import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "#2C3E50" }}>
      <Toolbar>
        {/* Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            MyStore
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          <HomeIcon sx={{ marginRight: "5px" }} /> Home
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
