const express = require('express');
const { auth } = require('./users');
const Order = require('../models/Order');
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { items, address, email } = req.body;
  const order = await Order.create({ user: req.user.id, items, address, email });
  res.json(order);
});
router.get("/", auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});
module.exports = router;
