const express = require('express');
const api = require('../service/api');
let app = express();


// ============================
// Realiza una busqueda por texto de busqueda
// ============================
app.get('/api/items?:query', (req, res) => {
    let body = req.query.q;
    api.getItemFindText(body, res);

});


module.exports = app;
