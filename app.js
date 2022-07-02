const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require("./routes/todo");

const app = express();

app.use(express.json());
app.use("/todo", authRoutes);

const port = process.env.PORT || 8000;

const start = async () => {
  mongoose.connect(process.env.MONGO_URI);
  app.listen(port, console.log("Server Started"));
};

start();
