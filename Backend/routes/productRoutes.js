const express = require('express');
const Product = require('../models/Product'); // Make sure to adjust the path
const upload = require('../utils/multer'); // Import multer
const authenticate = require('../middleware/authenticate'); // Import authenticate
const router = express.Router(); // Initialize the router

// Add Product Route
router.post('/addproduct', authenticate, upload.single('image'), async (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file.path;

  if (!name || !description || !price || !category || !image) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  try {
    const newProduct = new Product({ name, description, price, category, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; // Export the router
