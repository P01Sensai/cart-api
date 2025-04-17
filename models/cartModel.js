let cart = [];

module.exports = {
  getCart: () => cart,
  addToCart: (item) => cart.push(item),
  removeFromCart: (id) => cart = cart.filter(item => item.id !== id),
  getTotal: () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
};
