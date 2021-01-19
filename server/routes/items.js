const express = require('express');
const api = require('../service/api');
let app = express();

// ============================
// Recupera la información de un artículo.
// ============================
app.get('/api/items/:id', (req, res) => {

    let body = req;
    api.getItemFindId(body, res);

});

// ============================
// Recupera descripciones y revisiones de artículos.
// ============================
app.get('/api/items/:id/descriptions', (req, res) => {

    let body = req.params.id;
    api.getItemFindIdAndDesc(body, res);

});

module.exports = app;