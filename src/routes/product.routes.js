const express = require('express');
const productController = require('../controller/product.controller');

const route = express.Router();

route.get('/product', productController.getAll)

module.exports = route;