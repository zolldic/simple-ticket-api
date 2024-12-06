import express from "express";
import handler from "./routes/handler.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.URI);

const app = express();

app.use(express.json());

handler(app);

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
