const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: Number
  }],
  address: String,
  email: String,
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
