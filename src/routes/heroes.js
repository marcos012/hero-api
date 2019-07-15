const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');

router.get('/', (req, res) => {
    res.send('Pagina de heróis');
});

router.post('/', (req, res) => {
    const hero = new Hero(req.body);
    hero.save()
        .then(data => res.json({ mensagem: data }))
        .catch(err => res.json({ erro: `Operation Invalid ${err}` }));
});

module.exports = router;
