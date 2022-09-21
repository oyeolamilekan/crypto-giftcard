const express = require("express");

const { acceptedCrypto } = require("../controllers/crypto.controller");

const router = express.Router()

router.route('/accepted_crypto').get(acceptedCrypto)

module.exports = router