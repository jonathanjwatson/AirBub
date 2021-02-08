const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PlacesController = require("./controllers/placesController");
const ReservationsController = require("./controllers/reservationsController");

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

app.use("/api/places", PlacesController);
app.use("/api/reservations", ReservationsController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
