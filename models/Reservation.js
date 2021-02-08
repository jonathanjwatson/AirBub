const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  userName: {
    type: String,
    trim: true,
  },

  paidInFull: {
    type: Boolean,
  },

  place: {
    type: Schema.Types.ObjectId,
    ref: "Place",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
