const express = require('express');

const app = express();

app.use(require('./items'));
app.use(require('./sites'));

module.exports = app;