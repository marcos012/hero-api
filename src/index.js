const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv/config');

app.use(bodyParser.json());

const heroesRoute = require('./routes/heroes');

app.use('/heroes', heroesRoute);

app.get('/', (req, res) => {
    res.send('ola');
});

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('conectado'));

app.listen(3000);
