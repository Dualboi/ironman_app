import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || [
  "http://localhost:5173",
];

app.use(cors({
  origin: "*",
}));

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