const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/project");
        console.log("Connected to database");
    } catch (err) {
        console.error("Unable to connect to database:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
