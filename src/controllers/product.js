const Product = require('../models/product');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, image, category } = req.body;
        
        // Create a new product
        const newProduct = new Product({
            name,
            price,
            image,
            category
        });

        // Save the product to the database
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addProduct
};
