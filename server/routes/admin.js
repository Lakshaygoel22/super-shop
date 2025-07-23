const express = require('express');
const { auth } = require('./users');
const Product = require('../models/Product');
const router = express.Router();

router.post("/products", auth, async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  const p = await Product.create(req.body);
  res.json(p);
});
router.delete("/products/:id", auth, async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
module.exports = router;
