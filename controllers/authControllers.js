const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
