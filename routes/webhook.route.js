const express = require("express");

const { processWebhook } = require("../controllers/webhook.controller");

const { protectWebook } = require("../middleware/webhook.middleware");

const router = express.Router()

router.route('/process_webhook_event').post(protectWebook, processWebhook)

module.exports = router