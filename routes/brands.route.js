const express = require("express");

const { createBrand, brands } = require("../controllers/brands.controller");

const router = express.Router()

router.route('/create_brand').post(createBrand)

router.route('/brands').get(brands)

module.exports = router