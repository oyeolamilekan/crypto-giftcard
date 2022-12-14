const express = require("express");

const { createProduct, fetchProducts } = require("../controllers/products.controller");

const router = express.Router()

router.route('/create_product').post(createProduct)

router.route('/products/:id').get(fetchProducts)

module.exports = router