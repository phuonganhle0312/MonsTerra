// html-routes.js - this file offers a set of routes for sending users to the various html pages
const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index.handlebars");
  });

  app.get("/login", (req, res) => {
    res.render("login.handlebars");
  });

  app.get("/signup", (req, res) => {
    res.render("signup.handlebars");
  });
};
