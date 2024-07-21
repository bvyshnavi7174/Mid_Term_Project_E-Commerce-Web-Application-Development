const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routers/auth');
const productRoutes = require('./routers/product'); // Ensure this line is included
const connectDB = require('./config/db');
const cors = require('cors');
=======
const router = express.Router();
const { addProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/product');
>>>>>>> f65158f7d67c95c19ca0fbe2305c8bacf29afbe7

// Route to add a new product
router.post('/add', addProduct);

// Route to get all products
router.get('/', getAllProducts);

<<<<<<< HEAD
// CORS Options
const corsOptions = {
    origin: 'http://127.0.0.1:5501', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow PUT and DELETE
    allowedHeaders: ['Content-Type']
};
=======
// Route to update a product
router.put('/:id', updateProduct);
>>>>>>> f65158f7d67c95c19ca0fbe2305c8bacf29afbe7

// Route to delete a product
router.delete('/:id', deleteProduct);

<<<<<<< HEAD
// Use routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes); // Ensure this line is included

// Serve static files
app.use(express.static(path.join(__dirname, '../assets')));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
=======
module.exports = router;
>>>>>>> f65158f7d67c95c19ca0fbe2305c8bacf29afbe7
