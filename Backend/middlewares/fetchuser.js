const jwt = require('jsonwebtoken');
const JWT_SECRET = 'code$by$khan'; // Secret key for JWT

const fetchuser = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; // Attach user info to req object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
};

module.exports = fetchuser;
