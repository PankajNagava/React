const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));