import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes";


const app = express()

// Importnt change to Netlify URL once deployed, for local development this is fine
// CORS (frontend > backend)
app.use(cors({
  origin: "http://localhost:5173"
}))

// body parser
app.use(express.json())

// Test route for debugging
app.get("/",(req, res) => {
    res.send("Hello from the backend!")
})

// TODO: add routes here
app.use(express.json());

app.use(authRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})