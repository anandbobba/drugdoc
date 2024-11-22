const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Auth = require("./models/auth-db");

require("dotenv").config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors(
  // {
  //   origin: "http://localhost:5000",
  //   methods: ["GET", "POST"],
  //   credentials: true

  // }

));


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

// Authentication routes
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  Auth.findOne({ email, password })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      console.error("Error during sign-in:", err);
      res.status(500).json({ error: "Internal Server Error", details: err });
    });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  Auth.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error during signup:", err);
      res.status(400).json({ error: "Bad Request", details: err });
    });
});

// Start the server
app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
