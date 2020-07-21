const express = require("express");
const app = express();
const db = require("./models");
const ViewsController = require("./controllers/viewsController.js");
const APIController = require("./controllers/apiController");
const UsersController = require("./controllers/usersController");
const AuthController = require("./controllers/authControllers");
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
  })

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/collection-routes");
app.use("/api/collections", profileRoutes);

const postRoutes = require("./routes/pet-routes");
app.use("/api/pets", postRoutes);

// Routes
app.use(ViewsController);
app.use(APIController);
app.use("/api/users", UsersController);
app.use("/api/auth", AuthController);
const monsterRoutes = require("./routes/monster-routes");
app.use("/api", monsterRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
  });
});
