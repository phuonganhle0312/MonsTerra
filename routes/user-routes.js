const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(newUser => res.send(newUser));
})

router.get('/all', (req, res) => {
    db.User.findAll({
        include: [db.Collection]
    }).then(allUsers => res.send(allUsers));
})

module.exports = router;