import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import { start } from "./cron";
import routes from "./routes";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use("/api/messages", routes);

start(); // Start cron job

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
