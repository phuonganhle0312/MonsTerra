const express = require("express");
const router = express.Router();
const db = require("../models");

// /api/users/
router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 5).then(function (hash) {
    console.log(hash);
    db.User.create()({
      email: req.body.email,
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
