const express = require('express');
const router = express.Router();
const { fetchOrders } = require('../controllers/gmailController');

router.get('/orders', fetchOrders);

module.exports = router;
