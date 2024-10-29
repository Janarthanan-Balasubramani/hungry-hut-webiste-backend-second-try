const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/messages", routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
