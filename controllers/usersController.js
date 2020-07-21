const express = require("express");
const router = express.Router();
const db = require("../models");
const bcryptjs = require("bcryptjs")

// /api/users/
router.post("/api/users/signup", (req, res) => {
  bcrypt.hash(req.body.password, 5).then(function (hash) {
    console.log(hash);
    db.User.create()({
      username: req.body.username,
      password: hash,
    })
      .then((result) => {
        res.json({
          error: false,
          data: result,
          message: "new user created",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "error creating new user",
        });
      });
  });
});

// /api/users/:id
// router.put("/:id", (req, res) => {
//   res.json({
//     message: "Put route",
//   });
// });

module.exports = router;
