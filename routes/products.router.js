const express = require('express');
const productsController = require('../controllers/products.controller');
const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.addProduct);
productsRouter.get('/:productId', productsController.getProductById);
productsRouter.delete('/:productId', productsController.deleteProduct);

module.exports = productsRouter;