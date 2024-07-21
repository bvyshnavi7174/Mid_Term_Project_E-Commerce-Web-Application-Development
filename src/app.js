const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routers/auth');
const productRoutes = require('./routers/product'); // Add this line
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// CORS Options
const corsOptions = {
    origin: 'http://127.0.0.1:5501', // Your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes); // Add this line

// Serve static files
app.use(express.static(path.join(__dirname, '../assets')));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
