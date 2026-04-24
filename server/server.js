require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// ONLY import the orderRoutes we created for the shop
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);

// Simple test to verify the server is working
app.get('/', (req, res) => {
  res.send('Artisan Backend is Online ');
});

// Use Render's port if available, otherwise use 5000 (or 3000)
const PORT = process.env.PORT || 5000; 

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
