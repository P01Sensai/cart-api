const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addItem);
router.get('/', cartController.getCart);
router.delete('/remove/:id', cartController.removeItem);
router.get('/total', cartController.getTotal);

module.exports = router;
