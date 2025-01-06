const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Make sure to adjust the path to your User model
const router = express.Router(); // Use Router to define routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);  // Mount authRoutes for login/signup


// Signup route
router.post('/signup', async (req, res) => {
  const { email, password, role } = req.body;

  // Validate fields
  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  // Restrict 'admin' role creation
  if (role === 'admin' && !email.endsWith('@sru.edu.in')) {
    return res.status(403).json({ message: 'Unauthorized to create admin account' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; // Export the router, not the app
