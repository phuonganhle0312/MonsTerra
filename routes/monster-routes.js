const express = require("express");
const router = express.Router();
const db = require("../models");

let setSpecies;
let setArea;
let setRarity;
let setColorId;
let setColorSrc;
let setSrc;
let num;
let colorNum;

router.post("/monsters/new", (req, res) => {
  db.Monster.create({
    dex_species: req.body.dex_species,
    dex_area: req.body.dex_area,
    dex_rarity: req.body.dex_rarity,
    MonsterId: req.body.MonsterId,
  }).then((newPet) => res.send(newPet));
});

router.post("/color/new", (req, res) => {
  db.Color.create({
    src: req.body.src,
    colorId: req.body.colorId,
    MonsterId: req.body.MonsterId,
  }).then((newPet) => res.send(newPet));
});

// router.get('/monster/find/:id', (req, res) => {
//     findRarity();
//     console.log('rarity: ' + setRarity)
//     db.Monster.findAll({
//         where: {
//             dex_area: req.params.id,
//             dex_rarity: setRarity,
//         }
//     }).then(monster => {
//         res.send(monster)
//     })
// })

router.get('/monster/find/:id', (req, res) => {
    findRarity();
    console.log(setRarity)
    db.Monster.findAll({
        where: {
            dex_area: req.params.id,
            dex_rarity: setRarity,
        },
        include: [db.Color]
    }).then(monster => {
        findMonster(monster);
        findColor(monster);
        setSpecies = monster[num].dataValues.dex_species;
        console.log(monster[num].dataValues.dex_species)
        setArea = monster[num].dataValues.dex_area;
        console.log(monster[num].dataValues.dex_area)
        setColorSrc = monster[num].Colors[colorNum].src;
        console.log(monster[num].Colors[colorNum].src)
        setColorId = monster[num].Colors[colorNum].colorId;
        console.log(monster[num].Colors[colorNum].colorId)
        res.send(`<img src=${setColorSrc}>`)
        });
})

router.post('/monsters/add', (req, res) => {
    db.Pet.create({
        species: setSpecies,
        area: setArea,
        rarity: setRarity,
        color_src: setColorSrc,
        color: setColorId,
        CollectionId: req.body.CollectionId,
    }).then(newPet=> res.send(newPet))
});

router.post("/monsters/add", (req, res) => {
  console.log(setSpecies);
  db.Pet.create({
    species: setSpecies,
    area: setArea,
    rarity: setRarity,
    CollectionId: 1,
  }).then((newPet) => res.send(newPet));
});

findRarity = (region) => {
  num = Math.floor(Math.random() * 100) + 1;
  if (num >= 90) {
    setRarity = "rare";
  } else if (num >= 70) {
    setRarity = "uncommon";
  } else {
    setRarity = "common";
  }
};

findMonster = (monster) => {
    num = Math.floor(Math.random() * (monster.length))
    console.log(num);
}

findColor = (monster) => {
    colorNum = Math.floor(Math.random() * (monster[num].Colors.length))
    console.log(colorNum);
}


module.exports = router;
