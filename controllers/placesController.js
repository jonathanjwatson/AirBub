const express = require("express");
const Place = require("../models/Place");

const router = express.Router();

router.get("/", (req, res) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Place.findOne({ _id: req.params.id })
    .then((singlePlace) => {
      res.json(singlePlace);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  Place.create(req.body)
    .then((newPlace) => {
      res.json(newPlace);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
});

router.put("/:id", (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPlace) => {
      console.log(updatedPlace);
      res.json(updatedPlace);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.delete("/:id", (req, res) => {
  Place.findByIdAndDelete(req.params.id)
    .then((deletedPlace) => {
      res.json(deletedPlace);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;
