const path = require("path");

module.exports = function (app) {
  app.post("/register", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        console.log(User);
        res.redirect("/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });
};
