const express = require('express');
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./routes/user-routes')
app.use('/api/users', userRoutes);

const profileRoutes = require('./routes/collection-routes')
app.use('/api/collections', profileRoutes);

const postRoutes = require('./routes/pet-routes')
app.use('/api/pets', postRoutes)

const monsterRoutes = require('./routes/monster-routes')
app.use('/api', monsterRoutes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at ${PORT}`)
    })
})