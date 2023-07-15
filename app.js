const express = require("express");
require("dotenv").config();
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db");
// const connectDB = require("./db");

// Middleware
app.use(express.json());
// app.use(express.urlencoded())

// Routes
app.get("/hello", (req, res) => {
  res.send("Welcome to the Express.js server");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("listening on port " + process.env.PORT + "...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
