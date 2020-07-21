const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");
const bcryptjs = require("bcryptjs");
const passport = require("../config/passport");

router.post("/new", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
  }).then((newUser) => res.send(newUser));
});

//post route for signup
router.post("/signup", (req, res) => {
  let hash = bcryptjs.hashSync(req.body.password, 5);
  console.log(hash);
  db.User.create({
    username: req.body.username,
    password: hash,
  }).then((newUser) => {
    console.log("worked");
    res.send(newUser);
  });
});

// login route referenced from office hours activity 
router.post("/login", (req, res) => {
  console.log(req.body);
  db.User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      console.log(foundUser);
      bcryptjs
        .compare(req.body.password, foundUser.password)
        .then(function (result) {
          console.log(result);
          if (result) {
            res.json({
              error: false,
              data: {
                id: foundUser.id,
                username: foundUser.username,
              },
              message: "authenticated!",
            });
          }
        });
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Collection],
  }).then((allUsers) => res.send(allUsers));
});

module.exports = router;

