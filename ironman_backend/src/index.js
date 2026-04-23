const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api", sessionRoutes);

const planRoutes = require("./routes/planRoutes");
app.use("/api/plan", planRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Ironman backend is running");
});

// Port (Render uses process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});