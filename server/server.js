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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Order data will be stored in server/orders.json`);
});
