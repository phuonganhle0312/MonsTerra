const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.Pet.create({
        species: req.body.species,
        area: req.body.area,
        CollectionId: req.body.CollectionId
    }).then(newPet=> res.send(newPet))
});

router.get('/find/:id', (req, res) => {
    db.Monster.findAll({
        where: {area: req.params.id},
    }).then(pet => res.send(pet));
    
})


module.exports = router;