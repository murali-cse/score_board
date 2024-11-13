import "dotenv/config";
import express from "express";
import { db } from "./src/database/initialize.js";
import HomeRouter from "./src/routes/index.routes.js";

const app = express();

app.use("/app", HomeRouter);

db()
  .then((v) => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("Database connection failed", e);
  });
