const express = require('express');
const app = express()

const products = require('./productRoutes');

app.use('/product',products)

module.exports = app;