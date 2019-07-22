const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const heroesRoute = require('./routes/heroes');

app.use('/heroes', heroesRoute);

app.get('/', (req, res) => {
    res.send('Hero API');
});

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('conectado'));

app.listen(3000);
