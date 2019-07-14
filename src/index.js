const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('ola');
});

app.get('/heroes', (req, res) => {
    res.send('ola');
});

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('conectado'));
app.listen(3000);