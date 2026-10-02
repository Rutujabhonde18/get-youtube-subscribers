const express = require("express");
const Subscribers = require("./models/subscribers");
const path = require("path");

// Create an Express application
const app = express();

// Your code goes here

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve frontend files from public folder
app.use(express.static(path.join(__dirname, "../public")));

// Route to handle the root path
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to the Get YouTube Subscribers API. The server is running successfully!</h1>`,
  );
});

// API to get all subscribers
app.get("/subscribers", async (req, res) => {
  // Fetch all subscriber data from MongoDB
  const subscribers = await Subscribers.find();
  // Send subscriber data as JSON response
  res.json(subscribers);
});

// API to get only subscriber names and subscribed channels
app.get("/subscribers/names", async (req, res) => {
  // Fetch only name and subscribedChannel fields _id: 0 removes the MongoDB ID from the response
  const subscribers = await Subscribers.find(
    {},
    { name: 1, subscribedChannel: 1, _id: 0 },
  );
  res.json(subscribers);
});

// API to get a single subscriber by ID
app.get("/subscribers/:id", async (req, res) => {
  try {
    // Get the ID from the URL and search for the subscriber
    const subscriber = await Subscribers.findById(req.params.id);

    // If subscriber is not found, send 400 Bad Request
    if (!subscriber) {
      return res.status(400).json({
        message: Error(
          `User not exist with the given _id:${req.params.id}, Please check your Id`,
        ).message,
      });
    }
    // Send the subscriber data as JSON response
    else {
      res.json(subscriber);
    }
  } catch (err) {
    // Handle invalid MongoDB ID or other errors
    res.status(400).json({
      message: Error(`400 Bad request, Please check your _id: ${req.params.id}`)
        .message,
    });
  }
});

// Middleware to handle invalid routes
// This runs when no above route matches the requested URL
app.use((req, res) => {
  res.status(404).json({
    message: Error(`Error status code: 404 - Page Not Found`).message,
  });
});

// Export the app so it can be used in index.js
module.exports = app;
