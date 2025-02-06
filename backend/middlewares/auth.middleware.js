const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');

// Middleware to authenticate User
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user from the decoded token data
        const user = await userModel.findById(decoded._id);
        req.user = user;

        // Proceed to the next middleware or route handler
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

// Middleware to authenticate Captain
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch captain from the decoded token data
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;

        // Proceed to the next middleware or route handler
        return next();
    } catch (err) {
        console.log(err);  // Make sure to handle errors properly in production
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
