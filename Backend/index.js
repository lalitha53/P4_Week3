// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const authenticate = require('./middleware/authenticate'); // Correct the path
const multer = require('./utils/multer'); // Correct the path

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Parse incoming JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
const port = process.env.PORT || 2200;
app.listen(port, () => console.log(`Server running on port ${port}`));
