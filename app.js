import "dotenv/config";
import express from "express";
import { db } from "./src/database/initialize.js";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  db()
    .then((v) => {
      console.log("Database connected");
    })
    .catch((e) => {
      console.log("Database connection failed", e);
    });
});
