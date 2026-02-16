import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5000",
    process.env.FRONTEND_URL
  ],
  credentials: true
}));
app.use(express.json({ limit: "10mb" }));

app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("AI Child Conversation Backend Running 🚀");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});