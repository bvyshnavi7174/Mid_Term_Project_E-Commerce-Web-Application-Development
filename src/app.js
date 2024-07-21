const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/product');

// Route to add a new product
router.post('/add', addProduct);

// Route to get all products
router.get('/', getAllProducts);

// Route to update a product
router.put('/:id', updateProduct);

// Route to delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
