const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});


router.post("/login", function(req, res) {
  console.log("===========================",req)
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/");
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/game", (req, res) => {
  res.render("game");
});

router.get("/user", (req, res) => {
  res.render("inventory");
});
module.exports = router;
