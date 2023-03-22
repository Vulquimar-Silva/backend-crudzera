const express = require('express');
const productController = require('../controller/product.controller');

const route = express.Router();

route.get('/product', productController.getAll)
route.get('/product/:id', productController.getById)
route.post('/product', productController.save)

module.exports = route;