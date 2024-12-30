// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const authenticate = require('../middleware/authenticate');  // Import the authenticate middleware

const router = express.Router();

// Add Product (Only accessible by authenticated users)
router.post('/addproduct', authenticate, async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: 'Please provide name, description, price, and category' });
  }

  try {
    const newProduct = new Product({ name, description, price, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Display All Products
router.get('/DisplayAllProduct', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// New Collections (Recently added products)
router.get('/NewCollections', async (req, res) => {
  try {
    const newProducts = await Product.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(newProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update Product
router.put('/UpdateProduct/:id', authenticate, async (req, res) => {  // Auth protected route
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: 'Please provide name, description, price, and category' });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove Product
router.delete('/RemoveProduct/:id', authenticate, async (req, res) => {  // Auth protected route
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
