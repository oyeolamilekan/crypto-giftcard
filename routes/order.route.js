const express = require("express");

const { createOrder, fetchOrder, fetchOrders } = require("../controllers/order.controller");

const router = express.Router()

router.route('/create_order').post(createOrder)

router.route('/order_status/:orderId').get(fetchOrder)

router.route('/orders').get(fetchOrders)

module.exports = router