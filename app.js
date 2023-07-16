const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db");

// const connectDB = require("./db");

// Middleware
app.use(express.json());
// app.use(express.urlencoded())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

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
