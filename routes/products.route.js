const express = require("express");

const { createProduct, fetchAllProducts } = require("../controllers/products.controller");

const router = express.Router()

router.route('/create_product').post(createProduct)

router.route('/products').get(fetchAllProducts)

module.exports = router