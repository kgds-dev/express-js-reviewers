let productModel = require('../models/products.model');

function getAllProducts(req, res) {
    res.json(productModel);
}

function getProductById(req, res) {
    const productId = Number(req.params.productId);
    const product = productModel[productId];
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            error: 'Product does not exist'
        })
    }
}

function addProduct(req, res) {
    // error handler if request body `name` does not exist into the client payload request
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing product name'
        });
    }

    const newProduct = {
        id: productModel.length,
        name: req.body.name
    };

    productModel.push(newProduct);
    res.json(productModel);
}

function deleteProduct(req, res) {
    const productId = Number(req.params.productId);
    const filteredProducts = productModel.filter(product => product.id !== productId);

    if (filteredProducts.length < productModel.length) {
        productModel = filteredProducts.map((product, index) => ({
            ...product,
            id: index
        }));

        res.send(`Product with ID ${productId} has been deleted`);
    } else {
        res.status(404).send(`Product with ID ${productId} not found`);
    }
}



module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
}