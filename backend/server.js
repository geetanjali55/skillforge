import cors from "cors";
import "dotenv/config";
import express from "express";
import { clerkMiddleware } from '@clerk/express'
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 4000 ;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});