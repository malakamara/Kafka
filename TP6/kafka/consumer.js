// consumer.js
const { Kafka } = require("kafkajs");
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

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:29092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const text = message.value.toString();
      console.log("Message reçu :", text);
      await Message.create({ value: text });
    },
  });
};

run().catch(console.error);
