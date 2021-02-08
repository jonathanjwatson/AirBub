const express = require("express");
const Reservation = require("../models/Reservation");

const router = express.Router();

router.get("/", (req, res) => {
  Reservation.find()
    .populate("place")
    .then((allReservations) => {
      res.json(allReservations);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Reservation.findOne({ _id: req.params.id })
    .populate("place")
    .then((singleReservation) => {
      res.json(singleReservation);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  Reservation.create(req.body)
    .then((newReservation) => {
      res.json(newReservation);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
});

router.put("/:id", (req, res) => {
  Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedReservation) => {
      console.log(updatedReservation);
      res.json(updatedReservation);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.delete("/:id", (req, res) => {
  Reservation.findByIdAndDelete(req.params.id)
    .then((deletedReservation) => {
      res.json(deletedReservation);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;
