const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/product');

// Route to add a new product
router.post('/add', addProduct);

module.exports = router;
