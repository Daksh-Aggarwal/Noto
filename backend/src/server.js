import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // Parses the JSON bodies: allows access to req.body
app.use(rateLimiter);

// A simple middleware for example
app.use((req, res, next) => {
  console.log(`Request method is ${req.method}.\tRequest URL is ${req.url}\n`);
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
