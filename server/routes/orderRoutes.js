const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// This is where your data will live
const ordersFilePath = path.join(__dirname, '../orders.json');

// Helper to read the file safely
const readOrders = () => {
    if (!fs.existsSync(ordersFilePath)) return [];
    const data = fs.readFileSync(ordersFilePath);
    return JSON.parse(data);
};

// POST: Save a new order
router.post('/place-order', (req, res) => {
    try {
        const orders = readOrders();
        const newOrder = { 
            ...req.body, 
            server_id: Date.now(),
            receivedAt: new Date() 
        };
        
        orders.push(newOrder);
        fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
        
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ message: "Error saving order" });
    }
});

// GET: Fetch all orders for Admin
router.get('/all-orders', (req, res) => {
    res.json(readOrders());
});

module.exports = router;