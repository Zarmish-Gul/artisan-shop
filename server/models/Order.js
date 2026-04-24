const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    city: String,
    postalCode: String
  },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, default: 'Processing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);