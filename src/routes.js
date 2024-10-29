const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, message } = req.body;

  try {
    const newMessage = await prisma.message.create({
      data: { email, message },
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create message" });
  }
});

module.exports = router;
