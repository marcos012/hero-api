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

module.exports = router;
