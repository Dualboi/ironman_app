import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://ironman-app.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.use(authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});