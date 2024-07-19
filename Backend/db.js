const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Replyme';  // Replace with your actual MongoDB URI

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);  // No options provided here
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

module.exports = connectToMongo;
