const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  platform: String,
  orderId: String,
  items: [{ name: String, price: Number }],
  deliveryDate: String,
  status: String,
  userEmail: String,
  rawEmailId: String,
});

module.exports = mongoose.model('Order', orderSchema);
