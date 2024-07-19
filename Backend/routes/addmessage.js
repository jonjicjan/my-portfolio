const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'code$by$khan';

// Route with validation and authentication
router.post('/', 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('subject').notEmpty().withMessage('Subject is required'),
        body('message').notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, subject, message } = req.body;
            const newMessage = new Message({ name, email, subject, message });
            await newMessage.save();

            // Assuming you want to create a token for the message or some other data
            const tokenData = { name, email }; // Adjust this according to your needs
            const authtoken = jwt.sign(tokenData, JWT_SECRET);

            res.json({ authtoken });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
);

module.exports = router;
