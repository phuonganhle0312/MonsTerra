const express = require("express");
const app = express();
const db = require("./models");
const ViewsController = require("./controllers/viewsController.js");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const PORT = process.env.PORT || 3000;


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/collection-routes");
app.use("/api/collections", profileRoutes);

const postRoutes = require("./routes/pet-routes");
app.use("/api/pets", postRoutes);


// Routes
app.use(ViewsController);
const monsterRoutes = require("./routes/monster-routes");
app.use("/api", monsterRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
  });
});
