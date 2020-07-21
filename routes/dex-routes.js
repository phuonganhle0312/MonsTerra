const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
  db.Dex.create({
    species: req.body.species,
  }).then((newDex) => res.send(newDex));
});

module.exports = router;
