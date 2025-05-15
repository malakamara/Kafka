// server.js
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kafkadb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    value: String,
    createdAt: { type: Date, default: Date.now },
  })
);

const app = express();
const port = 3000;

app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

app.listen(port, () => {
  console.log(` API en écoute sur http://localhost:${port}`);
});
