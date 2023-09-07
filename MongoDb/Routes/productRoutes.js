const express = require('express');
const Routes = express.Router();

const {createProduct,getProducts} = require("../Controller/productController")

Routes.post('/createProduct',createProduct )
Routes.get('/getProducts',getProducts )

module.exports = Routes;