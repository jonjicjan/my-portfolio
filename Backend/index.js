const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors'); // Import CORS middleware

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 55000;

// Middleware to parse JSON requests
app.use(express.json());

// CORS middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'auth-token'],
}));

// Import and use the router for handling messages
app.use('/api/addmessage', require('./routes/addmessage'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
