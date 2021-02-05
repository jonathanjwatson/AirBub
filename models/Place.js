const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  location: {
    type: String,
  },

  numBeds: {
    type: Number,
  },

  numBaths: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
