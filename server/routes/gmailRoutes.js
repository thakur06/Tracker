const express = require('express');
const router = express.Router();
const { fetchOrders, fetchOrdersFromGmail } = require('../controllers/gmailController');

router.get('/orders', fetchOrders);
router.get('/orders/fetch-gmail', fetchOrdersFromGmail);

module.exports = router;
