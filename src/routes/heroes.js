const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');

router.get('/', async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json(heroes);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const hero = new Hero(req.body);
    try {
        const savedHero = await hero.save()
        res.json(savedHero);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:heroId', async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.heroId);
        res.json(hero);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:heroId', async (req, res) => {
    try {
        const removedHero = await Hero.remove({ _id: req.params.heroId });
        res.json(removedHero);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:heroId', async (req, res) => {
    try {
        const updatedPost = await Hero.updateOne(
            { _id: req.params.heroId },
            {
                $set: {
                    name: req.body.name,
                    age: req.body.age,
                    power: req.body.power
                }
            });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;
