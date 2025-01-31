import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRoutes from "./routes/games.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the game routes
app.use("/games", gameRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
