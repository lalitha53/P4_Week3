const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Make sure path is correct

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();  // Proceed to the next middleware
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
