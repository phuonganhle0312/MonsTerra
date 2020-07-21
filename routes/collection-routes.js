const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.Collection.create({
        name: req.body.name,
        UserId: req.body.UserId,
        CollectionId: req.body.CollectionId
    }).then(newCollection => res.send(newCollection))
});

router.get('/find/:id', (req, res) => {
    db.Collection.findAll({
        where: {userId: req.params.id},
        include: [db.User, db.Pet]
    }).then(collection => res.send(collection));
})


module.exports = router;