const express = require('express');
const app = express();

//Configs
app.use(express.json({
    type: 'application/json'
}))
app.use(express.urlencoded({ extended: true }))

//Rotas
require('./orders/routes')(app);

module.exports = app;