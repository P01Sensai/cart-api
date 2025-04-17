const cartModel = require('../models/cartModel');

exports.addItem = (req, res) => {
  cartModel.addToCart(req.body);
  res.status(201).json({ message: 'Item added' });
};

exports.getCart = (req, res) => {
  res.json(cartModel.getCart());
};

exports.removeItem = (req, res) => {
  const { id } = req.params;
  cartModel.removeFromCart(id);
  res.json({ message: 'Item removed' });
};

exports.getTotal = (req, res) => {
  res.json({ total: cartModel.getTotal() });
};
