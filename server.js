const express = require("express");
const mongoose = require("mongoose");
const Place = require("./models/Place");

const app = express();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/airbub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: ABSTRACT THESE PLACES ROUTES OUT INTO A CONTROLLER

app.get("/api/places", (req, res) => {
  Place.find().then((allPlaces) => {
    res.json(allPlaces);
  });
});

app.post("/api/places", (req, res) => {
  Place.create(req.body).then((newPlace) => {
    res.json(newPlace);
  });
});

// TODO: ADD PUT AND DELETE ROUTES

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
