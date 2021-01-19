require('./config/config');

const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');


// parse application/json
app.use(bodyParser.json());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// Configuración global de rutas
app.use(require('./routes/index'));


app.listen(process.env.PORT, () => {
    console.log('Escuchando url: ', process.env.API_URL);
    console.log('Escuchando puerto: ', process.env.PORT);
});